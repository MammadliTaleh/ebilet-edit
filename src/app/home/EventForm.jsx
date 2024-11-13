"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal"; // Import react-modal for modal functionality

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
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ConfigButton = styled(Button)`
  width: 50%;
  padding: 8px 16px;
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

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

  // Configuration JSON state
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
    fieldsConfig: {
      fields: [],
      translate: "AZ",
      staticFields: {
        email: { isRequired: false },
        phone: { isRequired: false },
        company: { isRequired: false, companyInput: true },
        position: { isRequired: false, positionInput: true },
      },
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

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handlers to update the config JSON
  const handleConfigChange = (key, value) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      [key]: value,
    }));
  };

  return (
    <Container>
      <Title>Tədbir Redaktə Et</Title>

      <ButtonContainer>
        <Button>Əsas</Button>
        <ConfigButton onClick={() => setConfigModalOpen(true)}>Confiqurator</ConfigButton>
      </ButtonContainer>

      {/* Modal for Configuration */}
      <Modal
        isOpen={isConfigModalOpen}
        onRequestClose={() => setConfigModalOpen(false)}
        ariaHideApp={false}
      >
        <ModalContent>
          <h2>Configuration Settings</h2>
          
          <Label>
            Bilet linki:
            <input
              type="checkbox"
              checked={config.ticketLink}
              onChange={(e) => handleConfigChange("ticketLink", e.target.checked)}
            />
          </Label>
          
          <Label>
            Agenda:
            <input
              type="checkbox"
              checked={config.agenda}
              onChange={(e) => handleConfigChange("agenda", e.target.checked)}
            />
          </Label>

          <Label>
            Logo görünsün:
            <input
              type="checkbox"
              checked={config.logoShow}
              onChange={(e) => handleConfigChange("logoShow", e.target.checked)}
            />
          </Label>

          <button onClick={() => setConfigModalOpen(false)}>Close</button>
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

      {/* Additional inputs as per your original code */}
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
    </Container>
  );
};

export default EventForm;
