import {SumSelector} from "./components/sum/sum-selector/sum-selector.jsx";
import {Monitor} from "./components/monitor.jsx";
import {Provider} from "./provider.jsx";
import {UploadFile} from "./components/upload-file.jsx";
import {SumWindow} from "./components/sum/sum-input/sum-window.jsx";
import {SumResultWindow} from "./components/sum/sum-result/sum-result-window.jsx";

export const App = () => {

    return (
        <Provider>
            <div className={`flex flex-col items-center w-full h-screen space-y-6`}>
                <div>
                    <img src={`src/assets/logo.png`} alt={`logo`} className={`absolute top-[50px] left-[205px] w-[75px] h-[75px]`}/>
                </div>
                <UploadFile/>
                <SumResultWindow/>
                <SumWindow/>
                <SumSelector/>
                <Monitor/>
            </div>
        </Provider>
    )
}
