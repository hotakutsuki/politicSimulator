import React from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

type SliderOpositeProps = {
    val: number;
    setVal: (val: number) => void;
    valName: string;
    available: number;
    subtitle?: string;
};

export function valueLabelFormat(value: number) {
    const scaledValue = value as number;
    return `${scaledValue.toFixed(2)} %`;
}

export function calculateScaledValue(value: number) {
    return Math.pow(value / 100, 2) * 100;
}

export function calculateInverseScaledValue(scaledValue: number) {
    return 100 * Math.sqrt(scaledValue / 100);
}

export default function SliderPercentual({ val, setVal, valName, available, subtitle }: SliderOpositeProps) {

    const [saliderValue, setSliderValue] = React.useState<number>(0);

    return (
        <div className="flex flex-row items-center space-x-4">
            <label className="flex flex-col text-nowrap w-56 text-end">{valName} (%)</label>
            <Slider
                value={saliderValue}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                scale={calculateScaledValue}
                onChange={(_, value) => {
                    setVal(calculateScaledValue(value as number));
                    setSliderValue(value as number);
                }}
                max={100}
                step={1}
                sx={{
                    width: 300,
                    '& .MuiSlider-track': {
                        color: available >= 0 ? "green" : "red"
                    },
                    '& .MuiSlider-rail': {
                        color: available >= 0 ? "green" : "red"
                    },
                    '& .MuiSlider-thumb': {
                        color: "white"
                    },
                }}
            />
            <div className="flex flex-col text-nowrap w-10 text-start">
                <label>{val.toFixed(2)} %</label>
                <label className="text-xs">
                    {subtitle || ''}
                </label>
            </div>
            <Button variant='text' onClick={() => {
                if (val + available < 0) {
                    setVal(0);
                    setSliderValue(calculateInverseScaledValue(0));
                    return;
                }
                setVal(val + available);
                setSliderValue(calculateInverseScaledValue(val + available));
            }}><ArrowOutwardIcon className='text-black' /></Button>
        </div>
    );
}