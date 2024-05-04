/* global appLocalizer */
import { useState, useEffect } from "react";
import BannerSection from "../Banner/banner";
import { getApiLink, sendApiResponse } from "../../services/apiService";
import { useModules } from "../../contexts/ModuleContext";
// import context
import { getModuleData } from "../../services/templateService";
import "./modules.scss";

const Modules = () => {
  const { modules, insertModule, removeModule } = useModules();
  // console.log(modules);
  // get all modules
  const modulesArray = getModuleData();

  console.log(modulesArray);

  const handleOnChange = async (event, moduleId) => {
    const action = event.target.checked ? "activate" : "deactivate";
    if (action == "activate") {
      insertModule(moduleId);
    } else {
      removeModule(moduleId);
    }
    const response = await sendApiResponse(getApiLink("module_manage"), {
      id: moduleId,
      action,
    });
    console.log("Data saved successfully:", response);
  };

  return (
    <>
      <div className="module-container">
        <div className="tab-name">
          <h1>Modules</h1>
        </div>
        <div className="module-option-row">
          {modulesArray.map((module) => (
            <div className="module-list-item">
                { module.pro_module && <span className="admin-pro-tag">Pro</span> }
                <div className="module-icon">
                  <i className={`font ${module.icon}`}></i>
                </div>

                <div className="card-meta">
                  <div className="meta-name">{module.name}</div>
                  <p className="meta-description"> {module.desc} </p>
                </div>
                <div className="card-footer">
                 <div className="card-support">
                    <button className="card-support-btn">Docs</button>
                    <button className="card-support-btn">Setting</button>
                 </div>
                  <div className="toggle-checkbox-content">
                    <input
                      type="checkbox"
                      className="woo-toggle-checkbox"
                      id={`toggle-switch-${module.id}`}
                      checked={modules.includes(module.id)}
                      onChange={(e) => handleOnChange(e, module.id)}
                    />
                    <label htmlFor={`toggle-switch-${module.id}`} className="toggle-switch-is_hide_cart_checkout"></label>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modules;
