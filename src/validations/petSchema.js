import * as yup from "yup";

// ✅ Esquema de validación con Yup
const petSchema = yup.object({
  petName: yup.string().required("El nombre es obligatorio").trim(),
  sexo: yup.string()
    .oneOf(["female", "male"], "Debe ser female u male")
    .when("category", {
      is: (category) => category === "match",
      then: (schema) => schema.required("El sexo de la mascota es obligatorio"),
      otherwise: (schema) => schema.notRequired()
    }),
  image: yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
  animalType: yup.string().oneOf(["dog", "cat", "other"], "Debe ser dog, cat u other").required("La especie es obligatoria"),
  breed: yup.string().nullable().notRequired(),
  age: yup.string().oneOf(["cachorro", "adulto", "senior"]).required("La edad es obligatoria"),
  description: yup.string().trim().nullable().notRequired(),
  medicalStatus: yup.string()
    .transform((valor, original) => {
      // console.log(`valor: ${typeof (valor)} - original: ${typeof (original)}`);
      // Si viene null o undefined, lo pasamos a undefined
      return original == null ? undefined : valor;
    })
    .default("Desconocido")
    .when("category", {
      is: (category) => category === "match",
      then: (schema) => schema.required("El estado médico de la mascota es obligatorio"),
      otherwise: (schema) => schema.notRequired()
    }),
  behaviorTraits: yup.string().nullable().notRequired(),
  preferences: yup.string().nullable().notRequired(),
  category: yup.string().oneOf(["adoption", "match"], "Debe ser adoption o match").required("La categoría es obligatoria")
}).required();

export default petSchema;