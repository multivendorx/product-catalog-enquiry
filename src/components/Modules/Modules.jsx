/* global appLocalizer */
import { useState, useEffect } from "react";
import BannerSection from '../Banner/banner';
import { getApiLink, sendApiResponse } from "../../services/apiService";
import { useModules } from "../../contexts/ModuleContext";
// import context
import { getModuleData } from "../../services/templateService";

const Modules = () => {
    const {modules, insertModule, removeModule} = useModules();
    // console.log(modules);
    // get all modules
    const modulesArray = getModuleData();

    console.log(modulesArray)

    const handleOnChange = async (event, moduleId) => {
        const action = event.target.checked ? 'activate' : 'deactivate';
        if (action == 'activate' ) {
            insertModule(moduleId);
        } else {
            removeModule(moduleId);
        }
        const response = await sendApiResponse(getApiLink('module_manage'), {
            id: moduleId,
            action
        });
        console.log('Data saved successfully:', response);
    }

    return (
        <>
        <div>	
            <div className="mvx-tab-name">
                <h1>Modules</h1>
            </div>
            {
                modulesArray.map((module) => (
                    <div className="mvx-module-list-start">
                        <div className="mvx-text-with-right-side-line">
                            {module.name}
                        </div>
                            
                        <div className="mvx-module-option-row">
                            <div className="mvx-module-icon">
                                <i className={`mvx-font ${module.icon}`}></i>
                            </div>

                            <header>
                                <div className="mvx-module-list-label-text">
                                    {module.name}
                                </div>
                                <p> {module.desc} </p>
                            </header>
                            <div>
                            
                                {/* doc link and mod link */}
                                <div>
                                    <input
                                        type="checkbox"
                                        className="woo-toggle-checkbox"
                                        id={`mvx-toggle-switch-${module.id}`}
                                        checked = {modules.includes(module.id)}
                                        onChange={(e) =>handleOnChange(e, module.id)}
                                    />
                                </div>
                            
                            </div>       
                        </div>
                    </div>
                ))
            }	
		</div>

        </>
    );
}

export default Modules;