import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  TextComponent,
  InputComponent,
  Box,
  DatePick,
  Dropdown,
  Dropdown1,
  Dropdown11
} from "./components";

export const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#8D19FFB2",
        justifyContent: "center",
        alignItems: "center",
        width: "1440px",
        height: "196px",
      }}
    >
      <TextComponent
        label="INCRESCO TECHNOLOGIES"
        styleProps={{
          alignItems: "center",

          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          fontVariant: "Helvetica",
          textAlign: "center",

          color: "#FFFFFF",
        }}
      />
      <br></br>
      <TextComponent
        label="CAMPUS HIRING-2023"
        styleProps={{
          left: "500px",
          //top:"110px",
          lineHeight: "41px",
          fontSize: "36px",
          fontStyle: "normal",
          textAlign: "center",
          fontWeight: "700",
          fontVariant: "Helvetica",
          color: "#FFFFFF",
          paddingTop: "10px",
        }}
      />
    </div>
  );
};

const Attatchments = () => {
  return (
    <>
      <div>
        <h4>ATTATCHMENTS</h4>
        <Box>
          <TextComponent
            styleProps={{
              fontSize: "18px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "30px",
            }}
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Resume/CV  Accept format: doc/.docx/.pdf;Size: 1MB"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            CustomTag="span"
          >
            <button
              className="Choose File"
              style={{
                borderColor: "#8D19FF",
                color: "purple",
                borderRadius: "5px",
                width: "200px",
                height: "48px",
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "23px",
              }}
            >
              Choose File
            </button>
            <TextComponent
              styleProps={{
                fontSize: "18px",
                textAlign: "left",
                fontWeight: 400,
                paddingTop: "20px",
              }}
              CustomTag="span"
            />
          </TextComponent>
         
        </Box>
      </div>
    </>
  );
};

export const App = ({data}) => {
  const [firstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [tenPercentage, setTenPercentage] = useState("");
  const [twelevepercentage, setTwelvePercentage] = useState("");
  const [degree, setDegree] = useState("");
  const [college, setCollege] = useState("");
  const [regno, setRegNo] = useState("");
  const [branch, setBranch] = useState("");

  return (
    <div>
      <Header />
      <TextComponent label="*required" styleProps={{margin:"10px"}}/>
      <div><TextComponent
          label="Registration form"
          styleProps={{
            lineHeight: "55px",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "700",
            fontVariant: "Helvetica",
            color: "#000000",
            paddingTop: "10px",
          }}
        />

        
      <Box header="Job details">
       <InputComponent
       type="text"
       placeholder="software developer"
       aria-label="software developer"
       readOnly
       style={{height:"2em"}}
       label={
        <TextComponent
        label="Job Profile"
        isMandatory="true"
        styleProps={{
          fontsize: "16px",
          textAlign: "left",
          fontWeight: 700,
          paddingTop: "10px",
        }}
        />
      }
      />
        </Box>
      

        
        <Box header="Personal Details">
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="First Name"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter First name"
            isMandatory
            value={firstName}
            onChange={(a) => {
              //console.log(a.target.value);
              setFirstName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Middle Name"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter Middle name"
            value={MiddleName}
            onChange={(a) => {
              //console.log(a.target.value);
              setMiddleName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="last Name"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter last name"
            isMandatory="true"
            value={lastName}
            onChange={(a) => {
              console.log(a.target.value);
              setLastName(a.target.value);
            }}
          />
          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Email Id"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter the Email Id"
            value={emailId}
            onChange={(a) => {
              console.log(a.target.value);
              setEmailId(a.target.value);
            }}
          />

          <InputComponent
            type="text"
            style={{ height: "2em" }}
            label={
              <TextComponent
                label="Contact Number"
                isMandatory="true"
                styleProps={{
                  fontsize: "16px",
                  textAlign: "left",
                  fontWeight: 700,
                  paddingTop: "10px",
                }}
              />
            }
            placeholder="Enter the Contact Number"
            value={contactNumber}
            onChange={(a) => {
              console.log(a.target.value);
              setContactNumber(a.target.value);
            }}
          />

          <DatePick />

          <TextComponent
            label="Gender"
            isMandatory="true"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              padding: "10px",
            }}
          />

          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Male"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />

          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="Female"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />

          <InputComponent
            type="radio"
            value={gender}
            name="gender"
            label="other"
            onChange={(a) => {
              console.log(a.target.value);
              setGender(a.target.value);
            }}
          />
        </Box>
        <Box header="Educational details">
          <TextComponent
            styleProps={{
              fontSize: "15px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
            label="Lowest educational profile"
            CustomTag="span"
          ></TextComponent>
          <Box header="">
            <InputComponent
              type="text"
              style={{ height: "2em" }}
              label={
                <TextComponent
                  label="10th percentage %"
                  isMandatory="true"
                  styleProps={{
                    fontsize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                  }}
                />
              }
              value={tenPercentage}
              onChange={(a) => {
                console.log(a.target.value);
                setTenPercentage(a.target.value);
              }}
            />
            <InputComponent
              type="text"
              style={{ height: "2em" }}
              label={
                <TextComponent
                  label="12th percentage %"
                  isMandatory="true"
                  styleProps={{
                    fontsize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                  }}
                />
              }
              value={twelevepercentage}
              onChange={(a) => {
                console.log(a.target.value);
                setTwelvePercentage(a.target.value);
              }}
            />
          </Box>

          <TextComponent
            styleProps={{
              fontSize: "15px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
            label="Highest educational profile"
            CustomTag="span"
          >

          </TextComponent>
          <Box header="">
          <TextComponent
            label="Education Type"
            isMandatory
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

        <Dropdown options={[...data[0].map((a) => a.displayText)]} />
        

            <TextComponent
            label="Degree"
            isMandatory
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
            <Dropdown options={[...data[1].map((a) => a.displayText)]} />
            <InputComponent
              type="text"
              style={{ height: "2em" }}
              label={ 
                <TextComponent
                  label="College"
                  isMandatory={"true"}
                  styleProps={{
                    fontsize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                  }}
                />
              }
              value={college}
              onChange={(a) => {
                console.log(a.target.value);
                setCollege(a.target.value);
              }}
            />

            <InputComponent
              type="text"
              style={{ height: "2em" }}
              label={
                <TextComponent
                  label="Reg.no"
                  isMandatory="true"
                  styleProps={{
                    fontsize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                  }}
                />
              }
              value={regno}
              onChange={(a) => {
                console.log(a.target.value);
                setRegNo(a.target.value);
              }}
            />
            <TextComponent
            label="Branch"
            isMandatory
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

            <Dropdown options={[...data[2].map((a) => a.displayText)]} />
           
            <Dropdown11/> 
          
          </Box>
          </Box>
        

        <Attatchments />

        <button
          className="submit"
          style={{
            backgroundColor: "#8D19FFB2",
            color: "white",
            borderRadius: "5px",
            width: "200px",
            height: "48px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "23px",
            float: "right",
            marginTop: "30px",
          }}
        >
          SUBMIT
        </button>
    </div>
</div>  
   );
  };
  
