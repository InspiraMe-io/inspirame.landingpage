import { Slide } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import styles from '../styles/components/ContactForm.module.scss'
import Block from "./Block";
import { Button } from "./Button";

interface ContactProps {
    title: string,
    content: string,
    id: string 
}

export default function ContactForm({ title, content, id }: ContactProps) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className={styles.contactContainer} id={id}>
            <div className={styles.contactContent}>
                <div>
                    <Slide direction="left">
                        <Block title={title} content={content} />
                    </Slide>
                </div>
                <form className={styles.formGroup} onSubmit={handleSubmit(onSubmit)}>
                    <Slide direction="right">
                        <div>
                            <label>
                                Nome
                                <input 
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                {...register('name')}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email
                                <input 
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                {...register('email')}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Mensagem
                                <textarea
                                    placeholder="Your Message"
                                    name="message"
                                    {...register('user_message')}
                                />
                            </label>
                        </div>
                        <div>
                            <Button text="Enviar" />
                        </div>
                    </Slide>
                </form>
            </div>
        </div>
    )
}