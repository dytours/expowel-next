const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "엑스포웰 고객센터",
      action: "tel:+(82) 2 753 0011",
      text: "02-753-0011",
    },
    {
      id: 2,
      title: "이메일 상담",
      action: "mailto:admin@expowel.com",
      text: "admin@expowel.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
