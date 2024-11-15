"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal"; 
import "./ModalEventForm.css"

const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 48%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
  border: 1px solid #ddd;

`;

const Label = styled.label`
  display: flex;
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgb(72, 72, 74);
`;

const ImagePreview = styled.div`
  width: 100%;
  height: 300px;
  border: 1px dashed #ddd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Input = styled.input`
  display: none;
`;

const ModalContent = styled.div`
  padding: 0px 20px 0 50px;
  height:50vh;
  background: white;
  border-radius: 8px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`;

const ConfigButton = styled(Button)`
  width: 50%;
  padding: 8px 16px;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;
const AddButton = styled(Button) `
width:100%;
`
const CloseConfigButton = styled(Button)`
width:100%
padding:6px;
  align-items: center;
  justify-content: center;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const FlexInputs = styled.div`
  display: flex;
  gap: 10px;
`;

const EventForm = () => {
  const [eventImage, setEventImage] = useState(null);
  const [ticketImage, setTicketImage] = useState(null);
  const [isConfigModalOpen, setConfigModalOpen] = useState(false);
  const [config, setConfig] = useState({
    agenda: true,
    logoShow: true,
    newSetPage: {
      buttonDesc: "Submit",
      dynamicPage: false,
      dynamicRequired: "",
    },
    ticketLink: true,
    EmailConfig: {
      bcc: "",
    },
    badgeConfig: {
      qrX: 420,
      qrY: 80,
      nameX: 60,
      nameY: 40,
      qrWidth: 80,
      addressX: 80,
      addressY: 160,
      companyX: 60,
      companyY: 110,
      upHeight: 65,
      pageWidth: 302,
      positionX: 60,
      positionY: 140,
      textWidth: 220,
      downHeight: 25,
      pageHeigth: 151,
      alignCenter: "center",
      nameFontSize: 32,
      companyFontSize: 14,
      doubleSideBadge: false,
      positionFontSize: 14,
    },
    ticketConfig: {
      qrX: 982,
      qrY: 50,
      textX: 328,
      textY: 265,
      qrWidth: 160,
      nameTextX: 190,
      nameTextY: 345,
      textColor: "#fff",
      sideByside: false,
      ticketFont: {
        ArialBold: { fontname: "Arimo-Bold", selected: true },
        LatoLight: { fontname: "Lato-Light", selected: false },
        NotoSerifBoldItalic: { fontname: "NotoSerif-BoldItalic", selected: false },
      },
      ticketName: "ticket",
      alignCenter: "center",
      surnameTextX: 190,
      surnameTextY: 405,
      nameSurnameFontSize: 32,
    },
    SmsIntegration: {
      smsLogin: "qrreader",
      smsPassword: "pK112&BL%bsk",
      smsSenderName: "Ebiletstore",
    },
    aproveAttendee: true,
    multipleApprove: true,
    ticketEmptyConfig: {
      qrX: 982,
      qrY: 50,
      textX: 328,
      textY: 265,
      qrWidth: 160,
      pageWidth: 1200,
      textColor: "#fff",
      pageHeight: 571,
      ticketName: "ticket",
      alignCenter: "center",
    },
  });

  const updateNestedConfig = (obj, keyPath, value) => { 
    const lastKey = keyPath.pop();
    const lastObj = keyPath.reduce(
      (nestedObj, key) => nestedObj[key] || (nestedObj[key] = {}),
      obj
    );
    lastObj[lastKey] = value;
    return { ...obj }; // Return a new copy of config for state update
  };
  const handleConfigChange = (keyPath, value) => {
    setConfig((prevConfig) => updateNestedConfig({ ...prevConfig }, [...keyPath], value));
  };

  return (
    <Container>
      <Title>Tədbir Redaktə Et</Title>
      

      <ButtonContainer>
        <Button>Əsas</Button>
        <ConfigButton onClick={() => setConfigModalOpen(true)}>Confiqurator</ConfigButton>
      </ButtonContainer>

      <Modal
        isOpen={isConfigModalOpen}
        onRequestClose={() => setConfigModalOpen(false)}
        ariaHideApp={false}
      >
        <ModalContent>
          <h2 style={{color:" #0056b3"}}>Konfiqurasiya</h2>
          <div className="config-conteiner">
        <div className="config">
        <h3  style={{color:"#007bff"}}>Checkbox</h3>
        <Label>
            <div className="word-side">Bilet linki:</div>
            <input className="modal-input"
              type="checkbox"
              checked={config.ticketLink}
              onChange={(e) => handleConfigChange(["ticketLink"], e.target.checked)}
            />
          </Label>

          <Label>
          <div className="word-side">Agenda:</div>
            <input className="modal-input"
              type="checkbox"
              checked={config.agenda}
              onChange={(e) => handleConfigChange(["agenda"], e.target.checked)}
            />
          </Label>
          <Label>
          <div className="word-side">Logo görünsün:</div>
            <input className="modal-input"
              type="checkbox"
              checked={config.logoShow}
              onChange={(e) => handleConfigChange(["logoShow"], e.target.checked)}
            />
          </Label>
          <Label>
          <div className="word-side">buttonDesc:</div>            <input className="modal-input"
              type="text"
              value={config.newSetPage.buttonDesc}
              onChange={(e) => handleConfigChange(["neWSetPage", "buttonDesc"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">dynamicRequired</div>
            <input className="modal-input"
              type="text"
              value={config.newSetPage.dynamicRequired}
              onChange={(e) => handleConfigChange(["neWSetPage", "dynamicRequired"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">dynamicPage</div>
            <input className="modal-input"
              type="checkbox"
              value={config.newSetPage.dynamicPage}
              onChange={(e) => handleConfigChange(["neWSetPage", "dynamicPage"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">bcc</div>
            <input className="modal-input"
              type="text"
              value={config.EmailConfig.bcc}
              onChange={(e) => handleConfigChange(["EmailConfig", "bcc"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">SmsLogin:</div>
            <input className="modal-input"
              type="text"
              value={config.SmsIntegration.smsLogin}
              onChange={(e) => handleConfigChange(["SmsIntegration", "smsLogin"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">SmsPassword:</div>
            <input className="modal-input"
              type="text"
              value={config.SmsIntegration.smsPassword}
              onChange={(e) => handleConfigChange(["SmsIntegration", "smsPassword"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">SmsSender:</div>
            <input className="modal-input"
              type="text"
              value={config.SmsIntegration.smsSenderName}
              onChange={(e) => handleConfigChange(["SmsIntegration", "smsSenderName"], parseInt(e.target.value, 10))}
            />
          </Label>
        </div>
        <div className="config">
        <h3  style={{color:"#007bff"}} >Nişan konfiqurasiyası</h3>
          <Label>
          <div className="word-side">QR X:</div>
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrX}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>

          <Label>
          <div className="word-side">QR Y:</div>
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrY}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Name X:</div>
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameX}
              onChange={(e) => handleConfigChange(["badgeConfig", "nameX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Name Y:</div>
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameY}
              onChange={(e) => handleConfigChange(["badgeConfig", "nameY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">qrWidth:</div>
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">address X:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. addressX}
              onChange={(e) => handleConfigChange(["badgeConfig", "addressX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">address Y:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. addressY}
              onChange={(e) => handleConfigChange(["badgeConfig", "addressY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Company X:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. companyX}
              onChange={(e) => handleConfigChange(["badgeConfig", "companyX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Company Y:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. companyY}
              onChange={(e) => handleConfigChange(["badgeConfig", "companyY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">upHeight:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.upHeight}
              onChange={(e) => handleConfigChange(["badgeConfig", "upHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          </div>
        <div className="config">
          <h3  style={{color:"white"}}>nisan kanfuqrasiyasi</h3>
          <Label>
          <div className="word-side">pageWidth:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. pageWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", " pageWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">position X:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.  positionX}
              onChange={(e) => handleConfigChange(["badgeConfig", "  positionX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">position Y:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.  positionY}
              onChange={(e) => handleConfigChange(["badgeConfig", "  positionY"], parseInt(e.target.value, 10))}
            />
          </Label>
        
          <Label>
          <div className="word-side">textWidth:</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. textWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", "  textWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">downHeight</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. downHeight}
              onChange={(e) => handleConfigChange(["badgeConfig", " downHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">pageHeight</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. pageHeigth}
              onChange={(e) => handleConfigChange(["badgeConfig", "  pageHeigth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">nameFontSize</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " nameFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">companyFontSize</div> 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.companyFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " companyFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
         
          <Label>
          <div className="word-side">positionFontSize</div>  
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.positionFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " positionFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">alignCenter</div> 
            <input className="modal-input"
              type="name"
              value={config.badgeConfig.alignCenter}
              onChange={(e) => handleConfigChange(["badgeConfig", " alignCenter"], parseInt(e.target.value, 10))}
            />
          </Label>
        </div>
        <div className="config">
           
          <h3  style={{color:"#007bff"}}>Bilet konfiqurasiyası</h3>
          <Label>
          <div className="word-side">QR X:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrX}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>

          <Label>
          <div className="word-side">QR Y:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrY}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">text X:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.textX}
              onChange={(e) => handleConfigChange(["ticketConfig", "textX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">text Y:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.textY}
              onChange={(e) => handleConfigChange(["ticketConfig", "textY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">qrWidth:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrWidth}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">nameTextX:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.nameTextX}
              onChange={(e) => handleConfigChange(["ticketConfig", "nameTextX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">nameTextY:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.nameTextY}
              onChange={(e) => handleConfigChange(["ticketConfig", "nameTexty"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">textColor</div>
            <input className="modal-input"
              type="color"
              value={config.ticketConfig.textColor}
              onChange={(e) => handleConfigChange(["ticketConfig", "textColor"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">sideByside:</div>
            <input className="modal-input"
              type="checkbox"
              value={config.ticketConfig.sideByside}
              onChange={(e) => handleConfigChange(["ticketConfig", "sideByside"], parseInt(e.target.value, 10))}
            />
          </Label>

        </div>
        <div className="config">
        <h3  style={{color:"#007bff"}}>Bilet daxili</h3>
          <Label>
          <div className="word-side">QR X:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrX}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">QR Y:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrY}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Test X:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.textX}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "testX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">Test Y:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.textY}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "testY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">qrWidth:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrWidth}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">pageWidth:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.pageWidth}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "pageWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">pageHeight:</div>
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.pageHeight}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "pageHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">ticketName:</div>
            <input className="modal-input"
              type="name"
              value={config.ticketEmptyConfig.ticketName}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "ticketName"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          <div className="word-side">alignCenter</div>
            <input
               className="modal-input"
              type="name"
              value={config.ticketEmptyConfig.alignCenter}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "alignCenter"], parseInt(e.target.value, 10))}
            />
          </Label>
        </div>
       </div>
       <div style={{display:"flex",gap:"4%"}}>
       <CloseConfigButton onClick={() => setConfigModalOpen(false)}>Bağla</CloseConfigButton>
       <CloseConfigButton onClick={() => setConfigModalOpen(false)}>Yadda Saxla</CloseConfigButton>
       </div>
          
        </ModalContent>
      </Modal>

      <InputGroup>
        <Label>Şirkətin Adı</Label>
        <select type="text" placeholder="Şirkətin adı" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
          name="tedbir"
          required>
              <option value="">Tədbir Seç</option>
              <option value="tedbir1">Sənaye Təhlükəsizliyi Zirvəsi 2024</option>
              <option value="tedbir2">Kitab Sərgisi</option>
              <option value="tedbir3">MEET POİNT 1 </option>
              <option value="tedbir4">COP29 Human Capital Forum</option>
              <option value="tedbir5">TEST FORUM</option>
              <option value="tedbir6">DigiFest</option>
          </select>
      </InputGroup>

      <InputGroup>
        <Label>Tədbirin Şəkli</Label>
        {eventImage ? (
          <ImagePreview onClick={() => setEventImage(null)}>
            <img src={eventImage} alt="Tədbir Şəkli" />
          </ImagePreview>
        ) : (
          <>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setEventImage)}
            />
            <ImagePreview onClick={() => document.querySelector('input[type="file"]').click()}>
              <span>Tədbirin şəklini seçin</span>
            </ImagePreview>
          </>
        )}
      </InputGroup>
         
     
      <InputGroup>
        <Label>Biletin Şəkli</Label>
        {ticketImage ? (
          <ImagePreview onClick={() => setTicketImage(null)}>
            <img src={ticketImage} alt="Bilet Şəkli" />
          </ImagePreview>
        ) : (
          <>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, setTicketImage)}
            />
            <ImagePreview onClick={() => document.querySelector('input[type="file"]').click()}>
              <span>Biletin şəklini seçin</span>
            </ImagePreview>
          </>
        )}
      </InputGroup>

      <InputGroup>
        <Label>Şirkətin Adı</Label>
        <input type="text" placeholder="Şirkətin adı" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
      </InputGroup>

      <InputGroup>
        <FlexInputs>
          <div>
            <Label>Başlama Tarixi</Label>
            <input
              type="datetime-local"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
          <div>
            <Label>Bitiş Tarixi </Label>
            <input
              type="datetime-local"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
          <div>
            <Label>Qiymət</Label>
            <input
              type="number"
              placeholder="₼"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
            />
          </div>
        </FlexInputs>
      </InputGroup>
      <InputGroup>
        <Label>Tədbirin Kateqoriyası</Label>
        <input type="text" placeholder="Kateqoriya" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
      </InputGroup>

      <InputGroup>
        <Label>Slogan</Label>
        <input type="text" placeholder="Slogan" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
      </InputGroup>

      <InputGroup>
        <Label>Tədbirin Keçiriləcəyi Məkan</Label>
        <input type="text" placeholder="Məkan" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} />
      </InputGroup>

      <InputGroup>
        <Label>Məlumat</Label>
        <TextArea placeholder="Tədbirin məlumatları" rows="4" />
      </InputGroup>

      <InputGroup>
        <Label>Gizlilik Siyasəti</Label>
        <TextArea placeholder="Gizlilik siyasəti" rows="4" />
      </InputGroup>
      <InputGroup>
        <Label>E-mailə göndəriləcək mətn</Label>
        <TextArea placeholder="Mətn daxil edin" rows="4" />
      </InputGroup>
      <InputGroup>
        <Label>SMS-ə göndəriləcək mətn</Label>
        <TextArea placeholder="Mətn daxil edin" rows="4" />
      </InputGroup>
      <ButtonContainer>
        <AddButton>Əlavə Et</AddButton>
        
      </ButtonContainer>
    </Container>
  );
};

export default EventForm;