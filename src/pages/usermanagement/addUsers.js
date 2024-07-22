import React, { useState, useEffect } from 'react';

const SalesRepresentativeForm = () => {
    const [countries, setCountries] = useState([{ id: 1, name: 'Turkey' }]); // Initial country data
    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    useEffect(() => {
        if (selectedCountry) {
            // Fetch cities for the selected country
            fetch(`/api/cities?country=${selectedCountry}`)
                .then(response => response.json())
                .then(data => setCities(data));
        } else {
            setCities([]);
            setDistricts([]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedCity) {
            // Fetch districts for the selected city
            fetch(`/api/districts?city=${selectedCity}`)
                .then(response => response.json())
                .then(data => setDistricts(data));
        } else {
            setDistricts([]);
        }
    }, [selectedCity]);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Sales Representative Form</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role Authority</label>
                        <select id="role" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>Admin</option>
                            <option>Regional Manager</option>
                            <option>Company Manager</option>
                            <option>Employee</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="situation" className="block text-sm font-medium text-gray-700">Situation</label>
                        <select id="situation" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>Not active</option>
                            <option>Active</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" id="last-name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="text" id="phone-number" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail Address</label>
                        <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                        <select
                            id="country"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                        >
                            <option value="">Select a country</option>
                            {countries.map(country => (
                                <option key={country.id} value={country.name}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                        <select
                            id="city"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            disabled={!selectedCountry}
                        >
                            <option value="">Select a city</option>
                            {cities.map(city => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
                        <select
                            id="district"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            disabled={!selectedCity}
                        >
                            <option value="">Select a district</option>
                            {districts.map(district => (
                                <option key={district.id} value={district.name}>{district.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Open Address</label>
                    <textarea id="address" rows="3" className="mt-1 block w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label htmlFor="sms-allowed" className="block text-sm font-medium text-gray-700">SMS Allowed?</label>
                        <select id="sms-allowed" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email-permission" className="block text-sm font-medium text-gray-700">Email Permission?</label>
                        <select id="email-permission" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="phone-permission" className="block text-sm font-medium text-gray-700">Phone Permission?</label>
                        <select id="phone-permission" className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                        <label htmlFor="repeat-password" className="block text-sm font-medium text-gray-700">Repeat Password</label>
                        <input type="password" id="repeat-password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                </div>

                <div className="text-right">
                    <button type="submit" className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">Save</button>
                </div>
            </form>
        </div>
    );
};

export default SalesRepresentativeForm;
