import React from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import CasinoIcon from '@mui/icons-material/Casino';
import { numToSuf } from '@/app/utils/utils';

type SliderOpositeProps = {
    val: number;
    setVal: (val: number) => void;
    valName: string;
    unit?: string;
    subtitle?: string;
    min?: number | null;
    max?: number | null;
    step?: number | null;
};

export function valueLabelFormat(value: number, unit?: string) {
    return `${numToSuf(value)} ${unit || '$'}`
}

export function calculateScaledValue(x: number, a: number, b: number) {
    if (x === 0) return a;
    if (x === 1) return b;

    return a * Math.pow(b / a, x);
}

export function calculateInverseScaledValue(scaledValue: number) {
    return Math.log(scaledValue) / Math.log(1000);
}

const SaliderNumeric = React.forwardRef(({ val, setVal, valName, unit, subtitle, min, max }: SliderOpositeProps, ref) => {

    const [saliderValue, setSliderValue] = React.useState<number>(0);

    React.useImperativeHandle(ref, () => ({
        setRandom
    }));

    const setRandom = () => {
        const ran = Math.random()
        setVal(calculateScaledValue(ran, min ?? 0.01, max ?? 100))
        setSliderValue(ran);
    }

    return (
        <div className="flex flex-row items-center space-x-4">
            <label className="text-nowrap w-56 text-end">{valName}</label>
            <Slider
                value={saliderValue}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => valueLabelFormat(v, unit)}
                scale={x => calculateScaledValue(x, min ?? 0, max ?? 100)}
                onChange={(_, x) => {
                    setVal(calculateScaledValue(x as number, min ?? 0.01, max ?? 100));
                    setSliderValue(x as number);
                }}
                min={0}
                max={1}
                step={.01}
                sx={{
                    width: 300,
                    '& .MuiSlider-track': {
                    },
                    '& .MuiSlider-rail': {
                    },
                    '& .MuiSlider-thumb': {
                        color: "white"
                    },
                }}
            />
            <div className="flex flex-col text-nowrap w-10 text-start">
                <label>{valueLabelFormat(val, unit)}</label>
                <label className='text-sm' >{subtitle}</label>
            </div>
            <Button variant='text' onClick={setRandom}><CasinoIcon color="action" /></Button>
        </div>
    );
});

SaliderNumeric.displayName = "SliderNumeric";

export default SaliderNumeric;