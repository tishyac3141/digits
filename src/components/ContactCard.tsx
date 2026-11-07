'use client';
import { Contact } from '@/lib/validationSchemas';
import { Stuff } from '@prisma/client';
import Link from 'next/link';
import {Card, Image} from "react-bootstrap";

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, description, image }: Contact) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={image} width={75} alt={`${firstName} ${lastName}`} />
      <Card.Title>{firstName} {lastName}</Card.Title>
      <Card.Subtitle>{address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);
export default ContactCard;
