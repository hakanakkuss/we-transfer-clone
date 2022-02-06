import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import { MailOutlined, MessageOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";

function CardBir() {
  const [files, setFiles] = useState([]);

  const onFileChange = (e) => {
    setFiles(e.target.files);
  };
  const onFileUpload = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
    axios
      .post("//localhost:8000/upload", data)
      .then((e) => {
        toast.success("Upload Success");
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };

  return (
    <div className="card">
      <input
        type="file"
        onChange={onFileChange}
        className="hidden-input"
        multiple
      />
      <button onClick={onFileUpload}>Upload</button>

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
