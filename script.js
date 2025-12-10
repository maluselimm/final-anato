// Lista de temas
const temas = [
    "Experiencia 1: Aductor muñeca, Corazón, Corte atriocapsular, Art. atlantoaxoidea, Portocava",
    "Experiencia 2: PVN pierna, Músculos eversores, Corazón, Corte retrocalloso, Inervación MI",
    "Experiencia 3: Fosa del codo, Estómago, Corte atrioventricular, Drenaje venoso MI",
    "Experiencia 4: Articulación glenohumeral, Peritoneo, Vía corticoespinal",
    "Experiencia 5: Cráneo, Vías biliares, Corte antero-genículo, Mano, Vías extrapiramidales" ,
    "Experiencia 6: Triángulo femoral, PVN cuello, Corte anterocapsular, Bóveda plantar",
    "Experiencia 7: Glenohumeral, Segmentación pulmonar, Corte anterocapsular, Fosa isquioanal",
    "Experiencia 8: Nervio mediano, Mesentéricas, Faringe, Corte retrolenticular, Axila, Porta",
    "Experiencia 9: Cráneo, Mediastino, Corte atrioventricular, Techo nasal, Pulmón derecho",
    "Experiencia 10: Pie, Mediastino, Corte astaoccipital, Vía biliar, Tráquea",
    "Experiencia 11: Rodilla, Pie, Hígado, Corte retrolenticular, Irrigación médula",
    "Experiencia 12: Cadera, Riñones, Biomecánica hombro, Pares craneales parasimpáticos",
    "Experiencia 13: Triángulo femoral, Páncreas, Fascias periné, Complejo amigdalino",
    "Experiencia 14: Fosa axilar, Hígado, Corte del atrio, Fosa poplítea, Celda prostática",
    "Experiencia 15: Triángulo femoral, Corazón, Corte geniculocapsular, Retroperitoneo",
    "Experiencia 16: Rodilla, Riñón, Corte posterocapsular, Fosa pterigopalatina, Vía visual",
    "Experiencia 17: Clavícula, Hígado, Fórceps mayor, Tabaquera anatómica, Hipogloso",
    "Experiencia 19: Antebrazo, Axis, Riñones, Tráquea, Inervación mano, Rodilla",
    "Experiencia 21: Glenohumeral, Cuello, Corte posterocapsular, Espacio laterofaríngeo",
    "Experiencia 23: Rodilla, Mediastino, Forámenes cráneo, Triángulo Budde, Reflejo fotomotor",
    "Experiencia 24: Bóveda plantar, Corte faringe, Plexo braquial, Circuitos cerebelosos",
    "Experiencia 26: Pierna y rodilla, Laríngeos recurrentes, Corte atrio, Caja timpánica",
    "Experiencia 28: Fosa poplítea, Corazón, Faringe, Vías piramidales",
    "Experiencia 31: Plexo braquial, Rodilla, Ilíaca interna, Conducto inguinal, Fosa isquioanal",
    "Experiencia 32: Glenohumeral, Cuello, Corte geniculocapsular, Espacio perifaríngeo",
    "Experiencia 36: Fosa axilar, Corazón, Endobase, Dominancia cardíaca",
    "Experiencia 40: Vértebras, Canal del pulso, Corte precalloso, Oído interno",
    "Experiencia 44: Húmero, Vía biliar, Corte atrio, Triángulo femoral, Oído medio",
    "Experiencia 48: Glenohumeral, Corazón, Diafragma, Vías corticonuclear",
    "Experiencia 50: Antebrazo, Faringe, Corte anterocapsular, Laringe, Periné",
    "Experiencia 54: Pierna posterior, Laringe, Vías extrahepáticas, Corte retrocalloso",
    "Experiencia 62: Axila, Hemipelvis, Corazón, Corte geniculocapsular, Nervio Cubital",
    "Experiencia 64: Triángulo femoral, Corazón (Koch/Dominancia), Cráneo, Reflejo fotomotor",
    "Experiencia 68: Triángulo femoral, Corazón, Endobase, Vía visual, Miosis",
    "Experiencia 73: Fosa media, Corte geniculocapsular, Vías biliares, Cuerpo calloso",
    "Rodilla (Clasificación, Biomecánica, Ligamentos)",
    "Corazón (Configuración, Irrigación, Cardionector, Dominancia)",
    "Cortes del Encéfalo (Jacob y Flechsig)",
    "Mediastino y Tórax (Contenido y Relaciones)",
    "Hígado (Segmentación y Pedículos)",
    "Laringe (Configuración e Inervación)",
    "Nervio Mediano y Plexo Braquial",
    "Segmentación Broncopulmonar",
    "Tráquea (Relaciones Cuello/Mediastino)",
    "Triángulo Femoral (Límites y Contenido)",
    "Bóveda Plantar",
    "Fosa Poplítea",
    "Vías Biliares y Triángulo de Budde",
    "Estómago (Porciones e Irrigación)",
    "Inervación Sensitiva (Mano, Pie, MI)",
    "Faringe y Espacio Perifaríngeo",
    "Riñón y Retroperitoneo",
    "Articulación Coxofemoral (Cadera)",
    "Caja Timpánica y Oído Medio",
    "Vía Visual y Reflejo Fotomotor",
    "Articulación Glenohumeral",
    "Plexos Coroideos y Ventrículos",
    "Conducto Inguinal",
    "Peritoneo y Transcavidad de los Epiplones",
    "Vías Piramidales y Extrapiramidales"

];

// Função para mostrar um tema aleatório
function mostrarTemaAleatorio() {
    const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
    document.getElementById("tema").textContent = temaAleatorio;
}

// Chama a função na carga inicial da página
window.onload = mostrarTemaAleatorio;
