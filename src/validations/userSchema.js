import * as yup from "yup";

const userSchema = yup.object({
  username: yup
    .string()
    .required("El nombre de usuario es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres")
    .max(20, "No puede superar los 20 caracteres")
    .matches(/^[a-zA-Z0-9_]+$/, "Solo se permiten letras, números y guiones bajos"),

  email: yup
    .string()
    .required("El email es obligatorio")
    .email("Debe ser un email válido (ejemplo@dominio.com)"),

  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/^\S+$/, "La contraseña no puede contener espacios en blanco")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .matches(/[@$!%*?&]/, "Debe contener al menos un carácter especial (@, $, !, %, *, ?, &, .)"),

  confirmPassword: yup
    .string()
    .required("Debe confirmar la contraseña")
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),

  firstName: yup
    .string()
    .required("El nombre es obligatorio")
    .trim(),

  lastName: yup
    .string()
    .required("El apellido es obligatorio")
    .trim(),

  role: yup
    .string()
    .required("El rol es obligatorio"),

  createdAt: yup
    .date()
    .required("La fecha de creación es obligatoria"),

  updatedAt: yup
    .date()
    .required("La fecha de actualización es obligatoria"),

  isActive: yup
    .boolean()
    .required("El estado activo es obligatorio"),

  profileImage: yup
    .string()
    .url("Debe ser una URL válida")
    .required("La imagen de perfil es obligatoria"),

  preferences: yup.object({
    language: yup
      .string()
      .required("El idioma es obligatorio"),
    notifications: yup
      .boolean()
      .required("La preferencia de notificaciones es obligatoria")
  }),

  address: yup.object({
    zipCode: yup
      .string()
      .required("El código postal es obligatorio")
      .matches(/^[0-9]{4,10}$/, "Debe ser un código postal válido"),
    localidad: yup
      .string()
      .required("La localidad es obligatoria")
  })
});

export default userSchema;
