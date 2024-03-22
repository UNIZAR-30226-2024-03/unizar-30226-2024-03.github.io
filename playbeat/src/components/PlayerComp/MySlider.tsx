import {extendVariants, Slider} from "@nextui-org/react";


export const MySlider = extendVariants(Slider,{
    variants : {
        color : {
            blueCustom: 
            {filler: "bg-[#6985C0]"}
        }
    }
})