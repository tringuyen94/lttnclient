import React from "react"

const MapHome = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.138225710405!2d106.72987231441004!3d10.87708969225329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d80701096bbf%3A0xaf7b2bfa38c117cc!2zODI2IFRMNDMsIELDrG5oIENoaeG7g3UsIFRo4bunIMSQ4bupYywgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1582078867222!5m2!1svi!2s"
        width={"100%"}
        height={450}
        frameBorder={0}
        style={{ border: 0 }}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default MapHome
