import React from 'react';
import { FaStar, FaMapMarkerAlt, FaParking, FaUtensils, FaSpa, FaWifi, FaSwimmer } from 'react-icons/fa';

const sampleResidence = {
  id: 1,
  name: "Luxury Mountain Resort",
  rating: { overall: 4.8, totalReviews: 245 },
  location: {
    address: "123 Mountain View Road, Alpine Valley",
    coordinates: [35.6586, 139.7454]
  },
  description: "Experience unparalleled luxury in our premium mountain resort featuring stunning views and world-class amenities.",
  photos: [
    "https://via.placeholder.com/800x600.png?text=Resort+Exterior",
    "https://via.placeholder.com/800x600.png?text=Luxury+Suite",
    "https://via.placeholder.com/800x600.png?text=Mountain+View"
  ],
  facilities: ['Swimming pool', 'Spa', 'Free WiFi', '24-hour front desk', 'Fitness center'],
  roomTypes: [
    {
      type: "Deluxe Room",
      pricePerNight: 25000,
      quantityAvailable: 5,
      amenities: ['King bed', 'Balcony', 'Mini-bar', 'Air conditioning']
    },
    {
      type: "Executive Suite",
      pricePerNight: 45000,
      quantityAvailable: 3,
      amenities: ['Separate living area', 'Jacuzzi', 'Panoramic views', 'Butler service']
    }
  ],
  policies: {
    checkIn: '14:00',
    checkOut: '12:00',
    cancellation: 'Free cancellation up to 48 hours before check-in'
  }
};

const ResidencePage = () => {
  const startingPrice = Math.min(...sampleResidence.roomTypes.map(room => room.pricePerNight));

  const facilityIcons = {
    '24-hour front desk': <FaParking className="w-6 h-6" />,
    'Swimming pool': <FaSwimmer className="w-6 h-6" />,
    'Spa': <FaSpa className="w-6 h-6" />,
    'Fitness center': <FaUtensils className="w-6 h-6" />,
    'Free WiFi': <FaWifi className="w-6 h-6" />,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">{sampleResidence.name}</h1>
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-6 h-6 ${i < Math.floor(sampleResidence.rating.overall) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">({sampleResidence.rating.totalReviews} reviews)</span>
            </div>
            <p className="mt-2 text-gray-600">{sampleResidence.location.address}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">PKR {startingPrice.toLocaleString()}/night</p>
            <span className="text-sm font-medium text-green-600">Available now</span>
          </div>
        </div>

        <div className="h-96 bg-gray-200 rounded-xl overflow-hidden mb-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory h-full">
            {sampleResidence.photos.map((photo, index) => (
              <img key={index} src={photo} alt="Residence" className="w-full h-full object-cover snap-center flex-shrink-0" />
            ))}
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Description</h2>
          <p className="text-gray-600 leading-relaxed">{sampleResidence.description}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {sampleResidence.facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                {facilityIcons[facility] || <FaParking className="w-6 h-6" />}
                <span className="text-gray-700">{facility}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Rooms & Suites</h2>
          <div className="space-y-6">
            {sampleResidence.roomTypes.map((room, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{room.type}</h3>
                      <p className="text-indigo-700 font-medium mt-2">PKR {room.pricePerNight.toLocaleString()}/night</p>
                    </div>
                    <div className="text-sm text-gray-500">{room.quantityAvailable} rooms available</div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">{amenity}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t">
                  <div className="p-6 flex justify-end">
                    <button className="bg-indigo-700 text-white px-6 py-2 rounded-lg hover:bg-indigo-800 transition-colors">
                      Reserve Now (Demo)
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Policies</h2>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-gray-600">Check-in</dt>
                <dd className="font-medium">{sampleResidence.policies.checkIn}</dd>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <dt className="text-gray-600">Check-out</dt>
                <dd className="font-medium">{sampleResidence.policies.checkOut}</dd>
              </div>
              <div className="col-span-full py-2">
                <dt className="text-gray-600 mb-2">Cancellation Policy</dt>
                <dd className="font-medium">{sampleResidence.policies.cancellation}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Location</h2>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-indigo-700" />
                <p>{sampleResidence.location.address}</p>
              </div>
            </div>
            <div className="h-96 bg-gray-200">
              <iframe
                title="location-map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                src={`https://maps.google.com/maps?q=${sampleResidence.location.coordinates[1]},${sampleResidence.location.coordinates[0]}&z=15&output=embed`}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResidencePage;