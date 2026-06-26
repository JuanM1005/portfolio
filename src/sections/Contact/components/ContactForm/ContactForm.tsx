import { useState, type SubmitEventHandler } from 'react';
import { Input, Textarea, Button } from '@/components/ui';
import { MESSAGE_MAX_LENGTH } from '../../constants/contact.constants';
import toast from 'react-hot-toast';

export const ContactForm = () => {
    const [message, setMessage] = useState('');

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        toast('Implementacion en desarrollo...', {icon: '👨‍💻'});
        setMessage('');
    };

    return (
        <form className="rounded-3xl border bg-surface-card-muted border-ink-muted/30 p-6 md:p-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    label="Nombre"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                />

                <Input
                    label="Correo"
                    name="email"
                    type="email"
                    placeholder="Tu correo"
                />
            </div>

            <div className="mt-6 flex flex-col gap-6">
                <Textarea
                    label="Mensaje"
                    name="message"
                    placeholder="¿En qué te puedo ayudar?"
                    maxLength={MESSAGE_MAX_LENGTH}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />

                <Button
                    type='submit'
                    variant="secondary"
                    size="md"
                    className="w-full"
                >
                    Enviar mensaje
                </Button>
            </div>
        </form>
    );
};