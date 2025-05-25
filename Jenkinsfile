pipeline {
    agent any

    tools {
        nodejs "Node 24"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Linting') {
            parallel {
                stage('Frontend Lint') {
                    steps {
                        sh 'npm run lint'
                    }
                }
                stage('Backend Lint') {
                    steps {
                        dir('Server') {
                            sh 'npm run lint'
                        }
                    }
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                dir('Server') {
                    sh 'npm install --production'
                }
            }
        }

        stage('Unit Tests') {
            parallel {
                stage('Frontend Tests') {
                    steps {
                        sh 'npm test -- --watchAll=false'
                    }
                }
                stage('Backend Tests') {
                    steps {
                        dir('Server') {
                            sh 'npm test'
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down || true'
                    sh 'docker-compose up --build -d'
                }
            }
        }

        stage('Selenium Tests') {
            steps {
                script {
                    docker.build('selenium-tests', './selenium-tests')
                    docker.image('selenium-tests').run(
                        "--network=host -e APP_URL=http://localhost",
                        "--rm"
                    )
                }
            }
        }
    }

    post {
        always {
            sh 'docker-compose down'
            cleanWs()
        }
    }
}

