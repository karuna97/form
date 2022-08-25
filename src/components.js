import React from "react";
import styled from 'styled-components';

export const InputComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: props.type === "text" ? "column" : "row",
      }}
    >
      {props.type === "radio" && <input {...props}></input>}
      <TextComponent
        label={props.label}
        CustomTag={props.type === "text" ? "div" : "span"}
      />
      {props.type === "text" && <input {... props}></input>}
    </div>
  );
};

export const TextComponent = ({
  label,
  styleProps,
  isMandatory,
  children,
  CustomTag = "div",
}) => (
  <CustomTag style={styleProps}>
    {label}
    {isMandatory && <span>*</span>}
    {children}
  </CustomTag>
);

export const DatePick=()=>
{
    return <div>  <label>{<TextComponent label="DOB-(DD/MM/YYYY)"  isMandatory="true" styleProps={{fontSize:"16px",textAlign:"left",fontWeight:700,padding:"10px"}}/>}</label>
    
    <input type="date"/></div>
}

export const Dropdown = (props) => {
  return (
    <div>
      <select>
        {props.options?.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
};



export const Dropdown1 = (props) => {
  return (
    <div>
      <select>
        {props.options?.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
};



export const Dropdown11=()=>{
  return <div>

<label>{<TextComponent label=" Backlogs"  isMandatory="true" styleProps={{fontSize:"16px",textAlign:"left",fontWeight:700,padding:"10px"}}/>}</label>
   
      <select>  
          <option value = ""> --SELECT--  
          </option>  
          <option value = ""> yes  
          </option>   
          <option value = ""> No  
          </option>  
          
      </select>  
  </div>
}


export const Box = (props) => (
  <>
    <TextComponent label={props.header} />
    <div style={{ border: "1px solid lightgrey",

  padding: "10px",
  borderRadius: "10px",
  
  margin: "10px" }}>{props.children}</div>
  </>
);




