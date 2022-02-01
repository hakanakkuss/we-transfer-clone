import React, { useRef, useState } from "react";
import { Card, Col, Row } from "antd";
import { MailOutlined, MessageOutlined } from "@ant-design/icons";
import axios from "axios";

function CardBir() {
  let kullaniciAdi = useRef();
  const [selectedFile, setSelectedFile] = useState([]);

  const onFileChange = (event) => {
    setSelectedFile({ selectedFile: event.target.files[0] });
  };
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    console.log(selectedFile);
    axios.post("api/uploadfile", formData);
  };
  const fileData = () => {
    if (setSelectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified: {setSelectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <div className="card">
      <input type="file" onChange={onFileChange} className="hidden-input" />
      <button>Upload</button>

      <br />
      <br />
      <Row gutter={16}>
        <Col span={8}>
          <Card className="card-title" title="Upload files"></Card>{" "}
          <a href="navigationbar.js">or select a folder</a>
          <br />
          <br />
          {/*  şimdilik navigationbar.js e gidiyor bunu daha sonra araştır */}
          {/*  upload files dediğinde ses notları fotoğraflar dosyalar yüklenebiliyor ama or select a folder dediğinde sadece dosyalar yükleniyor burayı düzenle */}
        </Col>

        <Col span={8}>
          <Card>
            <MailOutlined className="mailbox" />
            <input
              className="inp-1 inp1"
              placeholder="Email to"
              type="text"
            ></input>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <MailOutlined className="mailbox" />
            <input
              className="inp-2 inp2"
              placeholder="Your email"
              type="text"
            ></input>
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <MessageOutlined className="mailbox" />
            <input
              className="inp-4 inp4"
              placeholder="Message"
              type="text"
            ></input>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <button className="transfer-btn">Transfer</button>
          </Card>
        </Col>
      </Row>
      <form className="sol-alt-yazi">
        <b>WeTransfer</b>Pro
      </form>
    </div>
  );
}
export default CardBir;
