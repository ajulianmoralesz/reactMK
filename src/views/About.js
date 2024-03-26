import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { Input, input } from '@material-tailwind/react';
import { Select, Option } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";

const About = function () {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (

        <div className='content-center w-full m-8'>

            <Accordion open={open === 1}>

                <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 my-4 p-0'>
                    <div className='w-full bg-indigo-900 text-white py-4 px-2 rounded-md'>
                        Datos Básicos
                    </div>
                </AccordionHeader>

                <AccordionBody>

                    <div className='w-full pr-12 pl-8'>

                        <div className='grid grid-cols-2 gap-2 my-1'>
                            <Select variant='standard' label="Transacción">
                                <Option>Test</Option>
                            </Select>
                            <Select variant='standard' label="Sub Tipo Transacción">
                                <Option>Test</Option>
                            </Select>
                        </div>

                        <div className='grid grid-cols-4 gap-2 my-1'>
                            <div className='col-span-2'>
                            <Select variant='standard' label="Forma de Pago">
                                <Option>Test</Option>
                            </Select>
                            </div>                            
                            <Input variant='standard' label='Moneda'></Input>
                            <Input variant='standard' label='Valor'></Input>
                        </div>

                        <div className='grid grid-cols-4 gap-2 my-1'>
                            <Select variant='standard' label="Tipo Id">
                                <Option>Test</Option>
                            </Select>

                            <div className='flex flex-col grap-0'>
                                <Radio name="filtro" defaultChecked label="Nombre"/>
                                <Radio name="filtro" label="Identificación" />
                            </div>

                            <div className='col-span-2'>
                                <Input variant="standard" label="Cliente"/>
                            </div> 
                        </div>

                        <div className='grid grid-cols-1 my-1'>
                            <Select variant='standard' label="Fondo">
                                <Option>Test</Option>
                            </Select>                           
                        </div>

                        <div className='grid grid-cols-2 gap-2 my-1'>
                            <Select variant='standard' label="Tipo de Participación">
                                <Option>Test</Option>
                            </Select>

                            <Select variant='standard' label="Objetivo de Inversión">
                                <Option>Test</Option>
                            </Select>                         
                        </div>

                        <div className='grid grid-cols-2 gap-2 my-1'>
                            <Input variant="standard" label="Fecha Ejecución"/>
                        </div>


                    </div>

                </AccordionBody>

            </Accordion>

            <Accordion open={open === 2}>

                <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 my-4 p-0'>
                    <div className='w-full bg-indigo-900 text-white py-4 px-2 rounded-md'>
                        Datos Transacción
                    </div>
                </AccordionHeader>

            </Accordion>

            <Accordion open={open === 3}>

                <AccordionHeader onClick={() => handleOpen(1)} className='border-b-0 my-4 p-0'>
                    <div className='w-full bg-indigo-900 text-white py-4 px-2 rounded-md'>
                        Datos Complementarios
                    </div>
                </AccordionHeader>

            </Accordion>

        </div>

    );
}

export default About;