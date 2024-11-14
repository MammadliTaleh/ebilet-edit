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
  padding: 20px;
  background: white;
  border-radius: 8px;
  max-width: 800px;
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
          <h2>Konfiqurasiya</h2>
          <div className="config-conteiner">
        <div className="config-checkbox">
        <Label>
            Bilet linki:
            <input className="modal-input"
              type="checkbox"
              checked={config.ticketLink}
              onChange={(e) => handleConfigChange(["ticketLink"], e.target.checked)}
            />
          </Label>

          <Label>
            Agenda:
            <input className="modal-input"
              type="checkbox"
              checked={config.agenda}
              onChange={(e) => handleConfigChange(["agenda"], e.target.checked)}
            />
          </Label>
          <Label>
            Logo görünsün:
            <input className="modal-input"
              type="checkbox"
              checked={config.logoShow}
              onChange={(e) => handleConfigChange(["logoShow"], e.target.checked)}
            />
          </Label>
        </div>
        <div className="config-nisan">
        <h3>Nişan konfiqurasiyası</h3>
          <Label>
            QR X:
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrX}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>

          <Label>
            QR Y:
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrY}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            NAME X:
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameX}
              onChange={(e) => handleConfigChange(["badgeConfig", "nameX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            NAME Y:
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameY}
              onChange={(e) => handleConfigChange(["badgeConfig", "nameY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          QR-ın eni:
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.qrWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          addressX: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. addressX}
              onChange={(e) => handleConfigChange(["badgeConfig", "addressX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          addressY: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. addressY}
              onChange={(e) => handleConfigChange(["badgeConfig", "addressY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          companyX: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. companyX}
              onChange={(e) => handleConfigChange(["badgeConfig", "companyX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          companyY: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. companyY}
              onChange={(e) => handleConfigChange(["badgeConfig", "companyY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          upHeight: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.upHeight}
              onChange={(e) => handleConfigChange(["badgeConfig", "upHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          pageWidth: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. pageWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", " pageWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          positionX: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.  positionX}
              onChange={(e) => handleConfigChange(["badgeConfig", "  positionX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          positionY: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.  positionY}
              onChange={(e) => handleConfigChange(["badgeConfig", "  positionY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          textWidth: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. textWidth}
              onChange={(e) => handleConfigChange(["badgeConfig", "  textWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          downHeight: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. downHeight}
              onChange={(e) => handleConfigChange(["badgeConfig", " downHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          pageHeigth: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig. pageHeigth}
              onChange={(e) => handleConfigChange(["badgeConfig", "  pageHeigth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          nameFontSize: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.nameFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " nameFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          companyFontSize: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.companyFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " companyFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
         
          <Label>
          positionFontSize: 
            <input className="modal-input"
              type="number"
              value={config.badgeConfig.positionFontSize}
              onChange={(e) => handleConfigChange(["badgeConfig", " positionFontSize"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          alignCenter: 
            <input className="modal-input"
              type="name"
              value={config.badgeConfig.alignCenter}
              onChange={(e) => handleConfigChange(["badgeConfig", " alignCenter"], parseInt(e.target.value, 10))}
            />
          </Label>
        </div>
        <div className="config-bilet">
           
          <h3>Bilet konfiqurasiyası</h3>
          <Label>
            QR X:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrX}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>

          <Label>
            QR Y:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrY}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
          textX:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.textX}
              onChange={(e) => handleConfigChange(["ticketConfig", "textX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            textY:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.textY}
              onChange={(e) => handleConfigChange(["ticketConfig", "textY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            qrWidth:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.qrWidth}
              onChange={(e) => handleConfigChange(["ticketConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            nameTextX:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.nameTextX}
              onChange={(e) => handleConfigChange(["ticketConfig", "nameTextX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            nameTextY:
            <input className="modal-input"
              type="number"
              value={config.ticketConfig.nameTextY}
              onChange={(e) => handleConfigChange(["ticketConfig", "nameTexty"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
           textColor:
            <input className="modal-input"
              type="color"
              value={config.ticketConfig.textColor}
              onChange={(e) => handleConfigChange(["ticketConfig", "textColor"], parseInt(e.target.value, 10))}
            />
          </Label>

        </div>
        <div className="config-daxili">
        <h3>Bilet daxili konfiqurasiyası</h3>
          <Label>
            QR X:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrX}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            QR Y:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrY}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            test X:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.textX}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "testX"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            test Y:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.textY}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "testY"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            qrWidth:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.qrWidth}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "qrWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            pageWidth:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.pageWidth}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "pageWidth"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            pageHeight:
            <input className="modal-input"
              type="number"
              value={config.ticketEmptyConfig.pageHeight}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "pageHeight"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            ticketName:
            <input className="modal-input"
              type="name"
              value={config.ticketEmptyConfig.ticketName}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "ticketName"], parseInt(e.target.value, 10))}
            />
          </Label>
          <Label>
            alignCenter:
            <input
               className="modal-input"
              type="name"
              value={config.ticketEmptyConfig.alignCenter}
              onChange={(e) => handleConfigChange(["ticketEmptyConfig", "alignCenter"], parseInt(e.target.value, 10))}
            />
          </Label>
        </div>
       </div>
        

         
         

         

          <CloseConfigButton onClick={() => setConfigModalOpen(false)}>Bağla</CloseConfigButton>
        </ModalContent>
      </Modal>

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
