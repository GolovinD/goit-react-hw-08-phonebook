import { Helmet } from 'react-helmet';
import ContactForm from 'components/ContactForm/ContactForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
    </div>
  );
}
