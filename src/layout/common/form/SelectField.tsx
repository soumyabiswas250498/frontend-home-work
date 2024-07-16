import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Label } from '@radix-ui/react-select';


function SelectField(props: any) {
    const { onChange, onBlur, value, name, label, error, menuData, width } = props;
    return (
        <div className='w-fit'>
            <p>{label}</p>
            <Select onValueChange={(data) => onChange(name, data)} value={value} name={name}>
                <SelectTrigger className={width || 'w-36 md:w-44'}>
                    <SelectValue placeholder={label} />
                </SelectTrigger>
                <SelectContent>
                    {menuData.map((item: any) => <SelectItem value={item.value} key={item.value} >{label} : {item.label}</SelectItem>)}
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectField