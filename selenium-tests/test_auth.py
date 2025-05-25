from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os
import pytest

BASE_URL = os.getenv("APP_URL", "http://frontend")

@pytest.fixture
def browser():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_successful_login(browser):
    """Test valid user login"""
    browser.get(f"{BASE_URL}/login")
    
    # Fill login form
    browser.find_element(By.NAME, "email").send_keys("test@example.com")
    browser.find_element(By.NAME, "password").send_keys("validPassword123")
    browser.find_element(By.XPATH, "//button[@type='submit']").click()
    
    time.sleep(2)
    assert "/dashboard" in browser.current_url
    assert "Welcome" in browser.page_source

def test_user_registration(browser):
    """Test new user registration"""
    browser.get(f"{BASE_URL}/signup")
    
    # Fill registration form
    browser.find_element(By.NAME, "name").send_keys("New User")
    browser.find_element(By.NAME, "email").send_keys("new@example.com")
    browser.find_element(By.NAME, "password").send_keys("newPassword123")
    browser.find_element(By.XPATH, "//button[@type='submit']").click()
    
    time.sleep(2)
    assert "/login" in browser.current_url
    assert "Login" in browser.title