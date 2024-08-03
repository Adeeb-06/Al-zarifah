"use client"
import React from 'react';
import { DatePicker, DateRangePicker, Select, SelectItem } from "@nextui-org/react";
import { destination, visa } from "./data";
import { Button } from "@nextui-org/react";
import Link from 'next/link';

const SearchPanel = () => {
    return (
        <>
            <div className="px-2 bottom-10 lg:bottom-16 relative bg-white shadow-lg mx-auto rounded-[30px] w-[90%]  p-5  ">
                <div className='flex flex-wrap mx-auto flex-col md:flex-row justify-center items-center gap-6 w-[90%]'>
                    <div className="destination w-full lg:w-[18%] ">

                        <Select
                            items={destination}
                            label="Destination"
                            placeholder="Select a destination"
                            className="w-full"
                        >
                            {destination.map((animal) => (<SelectItem key={animal.label}>{animal.label}</SelectItem>))}
                        </Select>
                    </div>
                    <div className="destination w-full lg:w-[18%] ">

                        <Select
                            items={visa}
                            label="Visa"
                            placeholder="Select visa type"
                            className="w-full"
                        >
                            {visa.map((animal) => (<SelectItem key={animal.label}>{animal.label}</SelectItem>))}
                        </Select>
                    </div>
                    <div className="duration w-full lg:w-[25%] ">
                        <DateRangePicker
                            label="Stay duration"
                            className="w-full"
                        />
                    </div>
                    <div className="datepickre w-full lg:w-[18%] ">
                        <DatePicker label="Journey Date" className="w-full" />
                    </div>

                    <div className="w-full lg:w-auto">
                        <Link href={'/underconstruction'}>
                        <Button color='success' size='lg' className='w-full'>
                            Find Now
                        </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPanel;
