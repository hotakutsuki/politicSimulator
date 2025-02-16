
import { Slider } from '@mui/material';
import { Tooltip } from '@mui/material';

type SliderOpositeProps = {
    val: number;
    setVal: (val: number) => void;
    valName: string;
    opName: string;
};

export default function SliderOposite({ val, setVal, valName, opName }: SliderOpositeProps) {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between w-full items-center space-x-4">
                <div className="w-48 flex flex-col items-end">
                    <label className="text-nowrap">
                        {valName}{" "}
                        <Tooltip title="Delete" arrow placement="top"><span>ⓘ</span></Tooltip>
                    </label>
                    <p>{val}%</p>
                </div>
                <Slider
                    value={val}
                    onChange={(_, value) => setVal(value as number)}
                    sx={{
                        width: 300,
                        '& .MuiSlider-track': {
                            color: "bluewhite"
                        },
                        '& .MuiSlider-rail': {
                            color: "red"
                        },
                        '& .MuiSlider-thumb': {
                            color: "white"
                        },
                    }}
                />
                <div className="flex w-48 flex-col items-start">
                    <label className="text-nowrap">{opName}{" "}
                        <Tooltip title="Delete" arrow placement="top"><span>ⓘ</span></Tooltip>
                    </label>
                    <p>{100 - val}%</p>
                </div>
            </div>
        </div>
    );
}