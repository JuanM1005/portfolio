import { CONTACT_LINKS } from '../../constants/contact.constants';
import { ContactCard } from '../ContactCard/ContactCard';

export const ContactList = () => {
  return (
    <ul className="grid auto-rows-fr grid-cols-1 gap-6 max-w-md">
      {CONTACT_LINKS.map((education) => (
        <ContactCard key={education.href} {...education} />
      ))}
    </ul>
  );
};
