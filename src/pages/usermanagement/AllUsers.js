import React, { useState } from 'react';
import Image from "../../assets/Images/esimlogo.svg"
const users = [
    { id: 1, name: 'Nazim Xxx', role: 'Company Manager', email: 'info@goldfone.com', phone: '+905330000000', date: '12/07/2024', icon: 'company' },
    { id: 2, name: 'Nazim Xxx', role: 'Company Manager', email: 'Goldfone@esimgsm.com', phone: '05334010488', location: 'Turkey', date: '12/07/2024', icon: 'company' },
    { id: 3, name: 'Dogan Kaan', role: 'Company Manager', email: 'info@go2otel.com', phone: '+905322704377', date: '21/06/2024', icon: 'company' },
    { id: 4, name: 'Wael Kikhya', role: 'Company Manager', email: 'ceo@adamsuniversal.co.uk', phone: '+447776644111', date: '13/06/2024', icon: 'company' },
    { id: 5, name: 'Wael Kikhya', role: 'Company Manager', email: 'ceo@adamsuniversal.co.uk', phone: '+447776644111', date: '13/06/2024', icon: 'company' },
    { id: 6, name: 'Wael Kikhya', role: 'Company Manager', email: 'ceo@adamsuniversal.co.uk', phone: '+447776644111', date: '13/06/2024', icon: 'company' },
];

const roles = ['All Users', 'Admin', 'Regional Manager', 'Company Manager', 'Employee'];

const UserList = () => {
    const [selectedRole, setSelectedRole] = useState('All Users');

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const filteredUsers = selectedRole === 'All Users' ? users : users.filter(user => user.role === selectedRole);

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4 w-full flex justify-between px-6 bg-white py-6">
                <label htmlFor="role-select" className="text-xl font-bold">Users</label>
                <select
                    id="role-select"
                    value={selectedRole}
                    onChange={handleRoleChange}
                    className="p-2 border rounded-md"
                >
                    {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
            </div>
            <div className="flex bg-white mt-5 flex-col gap-4 w-full">
                {filteredUsers.map(user => (
                    <div key={user.id} className="flex justify-between items-center p-4 border rounded-lg shadow-lg">
                        <img src={Image} alt={user.role} className="w-12 h-12 mb-4" />
                        <div className="text-center mb-2 w-[70%] md:w-[50%] lg:w-[45%] xl:w-[35%]">
                            <h3 className="font-semibold">{user.name} - {user.role}</h3>
                            <p>{user.email} - {user.phone}</p>
                            <p>{user.location || ''}</p>
                        </div>
                        <div className="text-gray-500 text-sm mb-4">
                            <div className='flex justify-center'>
                                <span class="bg-[#22cc62] text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300 mb-1">Active</span>
                            </div>

                            <p>{user.date}</p>
                        </div>
                        <div className="flex gap-1">
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>

                            </button>
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-end w-full mt-4'>
                <nav aria-label="Page navigation example">
                    <ul class="flex items-center -space-x-px h-8 text-sm">
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default UserList;
