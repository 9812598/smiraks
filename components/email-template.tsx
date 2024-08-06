import * as React from "react";

interface EmailTemplateProps {
  name: string;
  tel: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  tel,
  email,
}) => (
  <div>
    <p>
      Имя: <b>{name}</b>
    </p>
    <p>
      Телефон: <b>{tel}</b>
    </p>
    <p>
      Почта: <b>{email}</b>
    </p>
  </div>
);
