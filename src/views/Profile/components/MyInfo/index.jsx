
import { useForm } from 'react-hook-form'
import styles from './MyInfo.module.css'
import { useEffect } from 'react'

const USER_DATA = 'userData'

export const MyInfo = () => {
    const { handleSubmit, register, formState: { errors }, setValue } = useForm()

    useEffect(() => {
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || {}
            setValue('name', userData?.name)
            setValue('age', userData?.age)
            setValue('email', userData?.email)
            alert('Información cargada correctamente')
        } catch (error) {
            console.log('Error al obtener la información del usuario', error)
        }
    }, [])

    const handleFormSubmit = (data) => {
        try {
            console.log(data)
            localStorage.setItem(USER_DATA, JSON.stringify(data))
            alert('Información guardada correctamente')
        } catch (error) {
            alert('Error al guardar la información')
        }

    }
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
            <label className={styles.label}>
                Name
                <input {...register('name', { required: true, minLength: 1, maxLength: 120 })} className={styles.input} />
            </label>
            <label className={styles.label}>
                Email
                <input {...register('email', { required: true })} className={styles.input} />
            </label>
            <label className={styles.label}>
                Age
                <input {...register('age', { required: true, min: 1, max: 120, valueAsNumber: true })} className={styles.input} />
            </label>
            <button type="submit" className={styles.submitButton}>Save</button>
        </form>
    )
}
