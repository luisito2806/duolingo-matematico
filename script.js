// ==========================================
// BANCO DE PREGUNTAS (20 POR CADA TEMA - 6º PRIMARIA)
// ==========================================
const BANCO_PREGUNTAS = {
  sumas: [
    { p: "¿Cuánto es 3/4 + 1/2?", opts: ["5/4", "4/6", "1", "3/8"], c: "5/4", exp: "1/2 equivale a 2/4. Sumando: 3/4 + 2/4 = 5/4." },
    { p: "¿Cuánto es 12.45 + 8.7?", opts: ["21.15", "20.15", "21.52", "20.45"], c: "21.15", exp: "Alineando decimales: 12.45 + 8.70 = 21.15." },
    { p: "¿Cuánto es 2/5 + 3/10?", opts: ["7/10", "5/15", "1/2", "6/10"], c: "7/10", exp: "2/5 son 4/10. Sumando 4/10 + 3/10 = 7/10." },
    { p: "¿Cuánto es 150.8 + 49.2?", opts: ["200.0", "199.0", "200.5", "201.0"], c: "200.0", exp: "0.8 + 0.2 = 1.0; 150 + 49 + 1 = 200." },
    { p: "¿Cuánto es 5/6 + 1/3?", opts: ["7/6", "6/9", "1", "4/6"], c: "7/6", exp: "1/3 = 2/6. 5/6 + 2/6 = 7/6." },
    { p: "¿Cuánto es 0.005 + 1.25?", opts: ["1.255", "1.30", "1.75", "1.2505"], c: "1.255", exp: "Sumando milésimos: 1.250 + 0.005 = 1.255." },
    { p: "¿Cuánto es 4 1/2 + 2 1/4?", opts: ["6 3/4", "6 2/6", "7", "6 1/2"], c: "6 3/4", exp: "Enteros: 4+2=6. Fracciones: 2/4 + 1/4 = 3/4." },
    { p: "¿Cuánto es 999 + 1,450?", opts: ["2,449", "2,450", "2,439", "2,549"], c: "2,449", exp: "1,450 + 1,000 - 1 = 2,449." },
    { p: "¿Cuánto es 3.1416 + 2.5?", opts: ["5.6416", "5.1416", "5.64", "6.0416"], c: "5.6416", exp: "3.1416 + 2.5000 = 5.6416." },
    { p: "¿Cuánto es 1/8 + 3/4?", opts: ["7/8", "4/12", "5/8", "6/8"], c: "7/8", exp: "3/4 equivale a 6/8. 1/8 + 6/8 = 7/8." },
    { p: "¿Cuánto es 45.67 + 12.33?", opts: ["58.00", "57.90", "58.10", "57.00"], c: "58.00", exp: "0.67 + 0.33 = 1.00; 45 + 12 + 1 = 58.00." },
    { p: "¿Cuánto es 2/3 + 1/6?", opts: ["5/6", "3/9", "4/6", "1"], c: "5/6", exp: "2/3 son 4/6. 4/6 + 1/6 = 5/6." },
    { p: "¿Cuánto es 18,200 + 3,850?", opts: ["22,050", "21,050", "22,150", "21,950"], c: "22,050", exp: "18,200 + 3,800 + 50 = 22,050." },
    { p: "¿Cuánto es 0.75 + 1/4?", opts: ["1.0", "0.80", "1.25", "0.95"], c: "1.0", exp: "1/4 equivale exactamente a 0.25; 0.75 + 0.25 = 1.0." },
    { p: "¿Cuánto es 7/10 + 25/100?", opts: ["95/100", "32/110", "85/100", "1"], c: "95/100", exp: "7/10 son 70/100. 70/100 + 25/100 = 95/100." },
    { p: "¿Cuánto es 5.08 + 3.92?", opts: ["9.00", "8.90", "9.10", "8.98"], c: "9.00", exp: "0.08 + 0.92 = 1.00; 5 + 3 + 1 = 9.00." },
    { p: "¿Cuánto es 1/2 + 1/3?", opts: ["5/6", "2/5", "3/6", "1/6"], c: "5/6", exp: "Mínimo común múltiplo 6: 3/6 + 2/6 = 5/6." },
    { p: "¿Cuánto es 85.4 + 16.75?", opts: ["102.15", "101.15", "102.25", "101.25"], c: "102.15", exp: "85.40 + 16.75 = 102.15." },
    { p: "¿Cuánto es 3/5 + 4/5?", opts: ["7/5", "7/10", "1 1/5", "1 3/5"], c: "7/5", exp: "Mismo denominador: 3+4 = 7/5 (o 1 entero 2/5)." },
    { p: "¿Cuánto es 125,000 + 75,500?", opts: ["200,500", "199,500", "201,000", "205,000"], c: "200,500", exp: "125,000 + 75,000 + 500 = 200,500." }
  ],

  restas: [
    { p: "¿Cuánto es 1 - 3/4?", opts: ["1/4", "2/4", "1/2", "0"], c: "1/4", exp: "1 entero son 4/4. 4/4 - 3/4 = 1/4." },
    { p: "¿Cuánto es 25.4 - 9.8?", opts: ["15.6", "16.4", "15.4", "14.6"], c: "15.6", exp: "25.4 - 9.8 = 15.6." },
    { p: "¿Cuánto es 5/6 - 1/2?", opts: ["2/6", "4/4", "1/3", "2/6 o 1/3"], c: "1/3", exp: "1/2 = 3/6. 5/6 - 3/6 = 2/6, simplificado es 1/3." },
    { p: "¿Cuánto es 100 - 45.65?", opts: ["54.35", "55.35", "54.45", "53.35"], c: "54.35", exp: "100.00 - 45.65 = 54.35." },
    { p: "¿Cuánto es 7/8 - 1/4?", opts: ["5/8", "6/8", "3/8", "1/2"], c: "5/8", exp: "1/4 son 2/8. 7/8 - 2/8 = 5/8." },
    { p: "¿Cuánto es 4.5 - 2.75?", opts: ["1.75", "1.85", "2.25", "1.25"], c: "1.75", exp: "4.50 - 2.75 = 1.75." },
    { p: "¿Cuánto es 3 1/2 - 1 3/4?", opts: ["1 3/4", "2 1/4", "1 1/2", "1 1/4"], c: "1 3/4", exp: "3 2/4 - 1 3/4 = 2 6/4 - 1 3/4 = 1 3/4." },
    { p: "¿Cuánto es 1,000 - 648?", opts: ["352", "362", "452", "342"], c: "352", exp: "1,000 - 648 = 352." },
    { p: "¿Cuánto es 12.05 - 4.1?", opts: ["7.95", "8.95", "7.05", "8.05"], c: "7.95", exp: "12.05 - 4.10 = 7.95." },
    { p: "¿Cuánto es 4/5 - 3/10?", opts: ["5/10", "1/2", "5/10 o 1/2", "1/5"], c: "1/2", exp: "4/5 son 8/10. 8/10 - 3/10 = 5/10, que es 1/2." },
    { p: "¿Cuánto es 50 - 18.4?", opts: ["31.6", "32.6", "31.4", "30.6"], c: "31.6", exp: "50.0 - 18.4 = 31.6." },
    { p: "¿Cuánto es 2/3 - 1/6?", opts: ["3/6", "1/2", "2/6", "3/6 o 1/2"], c: "1/2", exp: "4/6 - 1/6 = 3/6 = 1/2." },
    { p: "¿Cuánto es 2,500 - 875?", opts: ["1,625", "1,725", "1,635", "1,525"], c: "1,625", exp: "2,500 - 875 = 1,625." },
    { p: "¿Cuánto es 9.87 - 3.45?", opts: ["6.42", "6.32", "5.42", "6.52"], c: "6.42", exp: "Resta directa alineada: 6.42." },
    { p: "¿Cuánto es 1 1/3 - 2/3?", opts: ["2/3", "1/3", "1", "3/3"], c: "2/3", exp: "1 1/3 son 4/3. 4/3 - 2/3 = 2/3." },
    { p: "¿Cuánto es 80.05 - 19.9?", opts: ["60.15", "61.15", "60.05", "59.15"], c: "60.15", exp: "80.05 - 19.90 = 60.15." },
    { p: "¿Cuánto es 9/10 - 0.4?", opts: ["0.5", "0.4", "0.6", "0.35"], c: "0.5", exp: "9/10 es 0.9. 0.9 - 0.4 = 0.5." },
    { p: "¿Cuánto es 600 - 245?", opts: ["355", "365", "345", "455"], c: "355", exp: "600 - 200 - 45 = 355." },
    { p: "¿Cuánto es 15.3 - 8.75?", opts: ["6.55", "7.55", "6.45", "7.45"], c: "6.55", exp: "15.30 - 8.75 = 6.55." },
    { p: "¿Cuánto es 5/4 - 1?", opts: ["1/4", "1/2", "2/4", "3/4"], c: "1/4", exp: "5/4 - 4/4 = 1/4." }
  ],

  multiplicaciones: [
    { p: "¿Cuánto es 4.5 × 6?", opts: ["27.0", "24.0", "28.5", "26.0"], c: "27.0", exp: "4.5 × 6 = 27." },
    { p: "¿Cuánto es 1/2 × 3/4?", opts: ["3/8", "4/6", "3/6", "1/4"], c: "3/8", exp: "Directo: (1×3)/(2×4) = 3/8." },
    { p: "¿Cuánto es 0.25 × 100?", opts: ["25", "2.5", "250", "0.025"], c: "25", exp: "Se corre el punto decimal 2 lugares a la derecha: 25." },
    { p: "¿Cuánto es 12 × 1.5?", opts: ["18", "16", "15", "20"], c: "18", exp: "12 + la mitad de 12 (6) = 18." },
    { p: "¿Cuánto es 2/3 × 6?", opts: ["4", "12/3", "4 o 12/3", "3"], c: "4", exp: "(2 × 6) / 3 = 12 / 3 = 4." },
    { p: "¿Cuánto es 0.8 × 0.5?", opts: ["0.4", "0.40", "4.0", "0.04"], c: "0.4", exp: "8 × 5 = 40, recorriendo 2 cifras decimales = 0.40 = 0.4." },
    { p: "¿Cuánto es 35 × 20?", opts: ["700", "650", "750", "7,000"], c: "700", exp: "35 × 2 = 70, agregando el cero: 700." },
    { p: "¿Cuánto es 3/5 × 5/3?", opts: ["1", "15/15", "1 o 15/15", "0"], c: "1", exp: "Fracciones recíprocas: 15/15 = 1." },
    { p: "¿Cuánto es 1.25 × 8?", opts: ["10.0", "9.5", "10.25", "8.25"], c: "10.0", exp: "1 × 8 = 8, y 0.25 × 8 = 2. Total: 10." },
    { p: "¿Cuánto es 45 × 11?", opts: ["495", "485", "505", "455"], c: "495", exp: "45 × 10 = 450 + 45 = 495." },
    { p: "¿Cuánto es 0.04 × 1,000?", opts: ["40", "4", "400", "0.4"], c: "40", exp: "Se recorre 3 lugares: 40." },
    { p: "¿Cuánto es 3/4 × 8?", opts: ["6", "24/4", "6 o 24/4", "7"], c: "6", exp: "(3 × 8)/4 = 24/4 = 6." },
    { p: "¿Cuánto es 15 × 0.2?", opts: ["3.0", "30", "1.5", "0.3"], c: "3.0", exp: "0.2 es la quinta parte. 15 / 5 = 3." },
    { p: "¿Cuánto es 2.5 × 2.5?", opts: ["6.25", "5.25", "6.5", "6.05"], c: "6.25", exp: "25 × 25 = 625, con 2 decimales: 6.25." },
    { p: "¿Cuánto es 18 × 50?", opts: ["900", "850", "950", "1,000"], c: "900", exp: "18 × 100 / 2 = 1,800 / 2 = 900." },
    { p: "¿Cuánto es 5/6 × 2/5?", opts: ["1/3", "10/30", "1/3 o 10/30", "2/6"], c: "1/3", exp: "10/30 = 1/3." },
    { p: "¿Cuánto es 0.7 × 9?", opts: ["6.3", "7.2", "5.4", "6.9"], c: "6.3", exp: "7 × 9 = 63, con un decimal: 6.3." },
    { p: "¿Cuánto es 120 × 0.5?", opts: ["60", "6", "600", "240"], c: "60", exp: "Multiplicar por 0.5 es sacar la mitad: 60." },
    { p: "¿Cuánto es 7.5 × 4?", opts: ["30.0", "28.0", "31.5", "29.5"], c: "30.0", exp: "7.5 × 2 = 15; 15 × 2 = 30." },
    { p: "¿Cuánto es 2/7 × 14?", opts: ["4", "28/7", "4 o 28/7", "2"], c: "4", exp: "(2 × 14)/7 = 28/7 = 4." }
  ],

  divisiones: [
    { p: "¿Cuánto es 45 ÷ 5?", opts: ["9", "8", "7", "10"], c: "9", exp: "5 × 9 = 45." },
    { p: "¿Cuánto es 12.5 ÷ 5?", opts: ["2.5", "2.25", "3.0", "1.5"], c: "2.5", exp: "12.5 ÷ 5 = 2.5." },
    { p: "¿Cuánto es 1 ÷ 4 en decimal?", opts: ["0.25", "0.4", "0.5", "0.20"], c: "0.25", exp: "1/4 = 0.25." },
    { p: "¿Cuánto es 1/2 ÷ 1/4?", opts: ["2", "1/8", "4", "1/2"], c: "2", exp: "Regla cruzada: (1×4)/(2×1) = 4/2 = 2." },
    { p: "¿Cuánto es 350 ÷ 10?", opts: ["35", "3.5", "3500", "35.5"], c: "35", exp: "Se elimina un cero: 35." },
    { p: "¿Cuánto es 8.4 ÷ 2?", opts: ["4.2", "4.1", "4.4", "4.0"], c: "4.2", exp: "La mitad de 8.4 es 4.2." },
    { p: "¿Cuánto es 100 ÷ 8?", opts: ["12.5", "12.0", "13.5", "11.5"], c: "12.5", exp: "100 ÷ 8 = 12.5." },
    { p: "¿Cuánto es 3/4 ÷ 3?", opts: ["1/4", "3/12", "1/4 o 3/12", "1"], c: "1/4", exp: "3/4 ÷ 3/1 = 3/12 = 1/4." },
    { p: "¿Cuánto es 0.6 ÷ 0.2?", opts: ["3", "0.3", "30", "0.03"], c: "3", exp: "Multiplicando ambos por 10: 6 ÷ 2 = 3." },
    { p: "¿Cuánto es 1,440 ÷ 12?", opts: ["120", "12", "140", "110"], c: "120", exp: "12 × 12 = 144, más el cero: 120." },
    { p: "¿Cuánto es 15.6 ÷ 3?", opts: ["5.2", "5.1", "5.3", "4.8"], c: "5.2", exp: "15/3 = 5 y 0.6/3 = 0.2. Total: 5.2." },
    { p: "¿Cuánto es 5/8 ÷ 5/8?", opts: ["1", "25/64", "0", "5/8"], c: "1", exp: "Cualquier cantidad dividida entre sí misma da 1." },
    { p: "¿Cuánto es 75 ÷ 1,000?", opts: ["0.075", "0.75", "0.0075", "7.5"], c: "0.075", exp: "Se corre el punto 3 lugares a la izquierda: 0.075." },
    { p: "¿Cuánto es 90 ÷ 1.5?", opts: ["60", "45", "70", "55"], c: "60", exp: "900 ÷ 15 = 60." },
    { p: "¿Cuánto es 2/5 ÷ 2?", opts: ["1/5", "4/5", "2/10", "1/5 o 2/10"], c: "1/5", exp: "(2/5) / 2 = 2/10 = 1/5." },
    { p: "¿Cuánto es 4.8 ÷ 0.6?", opts: ["8", "0.8", "80", "6"], c: "8", exp: "48 ÷ 6 = 8." },
    { p: "¿Cuánto es 250 ÷ 25?", opts: ["10", "1", "100", "25"], c: "10", exp: "25 entra 10 veces en 250." },
    { p: "¿Cuánto es 3 ÷ 6?", opts: ["0.5", "0.2", "2", "0.33"], c: "0.5", exp: "3/6 = 1/2 = 0.5." },
    { p: "¿Cuánto es 16.8 ÷ 4?", opts: ["4.2", "4.4", "4.1", "3.9"], c: "4.2", exp: "16/4 = 4 y 0.8/4 = 0.2. Total: 4.2." },
    { p: "¿Cuánto es 2/3 ÷ 4/5?", opts: ["10/12 o 5/6", "5/6", "8/15", "6/7"], c: "5/6", exp: "(2 × 5)/(3 × 4) = 10/12 = 5/6." }
  ],

  problemas: [
    { p: "Un pantalón de $400 tiene 25% de descuento. ¿Cuánto descuentan?", opts: ["$100", "$75", "$50", "$150"], c: "$100", exp: "25% es 1/4 de $400 = $100." },
    { p: "¿Cuál es el área de un triángulo con base 10 cm y altura 6 cm?", opts: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"], c: "30 cm²", exp: "Área = (Base × Altura)/2 = (10 × 6)/2 = 30 cm²." },
    { p: "Si 3 libretas cuestan $45, ¿cuánto costarán 7 libretas?", opts: ["$105", "$95", "$115", "$90"], c: "$105", exp: "Cada una cuesta $15 ($45/3). 7 × 15 = $105." },
    { p: "Un auto viaja a 80 km/h durante 3.5 horas. ¿Qué distancia recorre?", opts: ["280 km", "240 km", "260 km", "300 km"], c: "280 km", exp: "Distancia = 80 × 3.5 = 280 km." },
    { p: "¿Cuántos gramos hay en 2.5 kilogramos?", opts: ["2,500 g", "250 g", "25,000 g", "2.50 g"], c: "2,500 g", exp: "1 kg = 1,000 g. 2.5 × 1,000 = 2,500 g." },
    { p: "El 50% de los 60 alumnos son niñas. ¿Cuántas niñas hay?", opts: ["30", "25", "35", "20"], c: "30", exp: "50% es la mitad: 60 / 2 = 30." },
    { p: "Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su perímetro?", opts: ["26 cm", "40 cm", "13 cm", "20 cm"], c: "26 cm", exp: "Perímetro = 8 + 8 + 5 + 5 = 26 cm." },
    { p: "Si repartes 3 pizzas entre 4 amigos por igual, ¿cuánto le toca a cada uno?", opts: ["3/4 de pizza", "4/3 de pizza", "1/2 pizza", "1/4 pizza"], c: "3/4 de pizza", exp: "3 pizzas ÷ 4 amigos = 3/4." },
    { p: "¿Cuál es el 10% de $850?", opts: ["$85", "$8.50", "$850", "$170"], c: "$85", exp: "10% de 850 = 850 / 10 = $85." },
    { p: "Un tren sale a las 3:15 p.m. y viaja 1 hora y 45 minutos. ¿A qué hora llega?", opts: ["5:00 p.m.", "4:50 p.m.", "5:15 p.m.", "4:45 p.m."], c: "5:00 p.m.", exp: "3:15 + 45 min = 4:00 p.m. + 1 hora = 5:00 p.m." },
    { p: "Una botella tiene 1.5 litros. ¿Cuántos mililitros son?", opts: ["1,500 ml", "150 ml", "15,000 ml", "1.500 ml"], c: "1,500 ml", exp: "1 litro = 1,000 ml. 1.5 × 1,000 = 1,500 ml." },
    { p: "En un grupo de 40 alumnos, el 20% sacó 10. ¿Cuántos alumnos sacaron 10?", opts: ["8", "10", "4", "6"], c: "8", exp: "10% es 4; 20% es 4 × 2 = 8 alumnos." },
    { p: "Un terreno cuadrado mide 12 metros por lado. ¿Cuál es su área?", opts: ["144 m²", "48 m²", "24 m²", "120 m²"], c: "144 m²", exp: "Área = Lado × Lado = 12 × 12 = 144 m²." },
    { p: "Compré 4 paletas por $28. ¿Cuánto pagaría por 10 paletas?", opts: ["$70", "$60", "$80", "$65"], c: "$70", exp: "Cada paleta cuesta $7 ($28/4). 10 × 7 = $70." },
    { p: "Un ciclista recorre 15 km en 30 minutos. ¿A qué velocidad promedio va?", opts: ["30 km/h", "15 km/h", "45 km/h", "60 km/h"], c: "30 km/h", exp: "Si hace 15 km en media hora, en 1 hora completa hace 30 km." },
    { p: "Si tienes 3/4 de kilo de queso y gastas 1/2 kilo, ¿cuánto te queda?", opts: ["1/4 de kilo", "1/8 de kilo", "2/4 de kilo", "1/3 de kilo"], c: "1/4 de kilo", exp: "3/4 - 2/4 = 1/4 de kilo." },
    { p: "Una caja tiene 12 paquetes de 25 galletas. ¿Cuántas galletas hay en total?", opts: ["300", "250", "280", "320"], c: "300", exp: "12 × 25 = 300." },
    { p: "El radio de un círculo mide 5 cm. ¿Cuánto mide su diámetro?", opts: ["10 cm", "25 cm", "15 cm", "2.5 cm"], c: "10 cm", exp: "El diámetro es el doble del radio: 5 × 2 = 10 cm." },
    { p: "Si pagué $180 por una playera que costaba $200, ¿qué porcentaje me descontaron?", opts: ["10%", "20%", "15%", "5%"], c: "10%", exp: "Descuento de $20 sobre $200 = 20/200 = 10%." },
    { p: "Una alberca se llena a razón de 200 litros por hora. ¿Cuánto llena en 4.5 horas?", opts: ["900 litros", "800 litros", "850 litros", "1,000 litros"], c: "900 litros", exp: "200 × 4.5 = 900 litros." }
  ]
};

// ==========================================
// BASE DE DATOS LOCAL Y MULTI-USUARIO
// ==========================================
const DB_NAME = "duomath_students_database";
const SESSION_NAME = "duomath_active_session";

function cargarBaseDatos() {
  const data = localStorage.getItem(DB_NAME);
  return data ? JSON.parse(data) : {};
}

function guardarBaseDatos(db) {
  localStorage.setItem(DB_NAME, JSON.stringify(db));
}

function getUsuarioActivo() {
  return localStorage.getItem(SESSION_NAME) || null;
}

function getDatosUsuario() {
  const user = getUsuarioActivo();
  if (!user) return { xp: 0, coronas: {}, vidas: 3 };
  const db = cargarBaseDatos();
  return db[user] || { xp: 0, coronas: {}, vidas: 3 };
}

function guardarProgresoUsuario(datosActualizados) {
  const user = getUsuarioActivo();
  if (!user) return;
  const db = cargarBaseDatos();
  db[user] = { ...db[user], ...datosActualizados };
  guardarBaseDatos(db);
}

// ==========================================
// ESTADO GLOBAL DEL JUEGO
// ==========================================
let temaActual = "sumas";
let indicePregunta = 0;
let vidas = 3;
let aciertos = 0;
let errores = 0;
let opcionSeleccionada = null;
let respondido = false;

// Elementos de la interfaz
const viewPath = document.getElementById("view-path");
const viewQuiz = document.getElementById("view-quiz");
const viewSummary = document.getElementById("view-summary");

const navXp = document.getElementById("nav-xp");
const navCrowns = document.getElementById("nav-crowns");
const navHearts = document.getElementById("nav-hearts");
const navUserTag = document.getElementById("nav-user-tag");
const btnLoginModal = document.getElementById("btn-login-modal");
const btnLogout = document.getElementById("btn-logout");
const btnHomeLogo = document.getElementById("btn-home-logo");

// Elementos del Quiz
const quizProgressFill = document.getElementById("quiz-progress-fill");
const quizHeartsCount = document.getElementById("quiz-hearts-count");
const questionStep = document.getElementById("question-step");
const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const btnAction = document.getElementById("btn-action");
const feedbackTray = document.getElementById("feedback-tray");
const feedbackMsg = document.getElementById("feedback-msg");
const btnQuitQuiz = document.getElementById("btn-quit-quiz");

// Elementos del Resumen
const summaryHeroIcon = document.getElementById("summary-icon");
const summaryTitle = document.getElementById("summary-title");
const summarySub = document.getElementById("summary-subtitle");
const sumCorrect = document.getElementById("sum-correct");
const sumWrong = document.getElementById("sum-wrong");
const sumPercent = document.getElementById("sum-percent");
const sumXp = document.getElementById("sum-xp");
const btnRetry = document.getElementById("btn-retry");
const btnFinishHome = document.getElementById("btn-finish-home");

// Modal Login
const modalLogin = document.getElementById("modal-login");
const btnCloseModal = document.getElementById("btn-close-modal");
const formLogin = document.getElementById("form-login");
const authUser = document.getElementById("auth-user");
const authPass = document.getElementById("auth-pass");
const authError = document.getElementById("auth-error");

// ==========================================
// INICIALIZACIÓN
// ==========================================
function init() {
  actualizarBarraNav();
  renderizarCoronasEnPath();
}

btnHomeLogo.addEventListener("click", () => mostrarVista("path"));

function mostrarVista(vista) {
  viewPath.classList.add("oculto");
  viewQuiz.classList.add("oculto");
  viewSummary.classList.add("oculto");

  if (vista === "path") {
    viewPath.classList.remove("oculto");
    renderizarCoronasEnPath();
    actualizarBarraNav();
  } else if (vista === "quiz") {
    viewQuiz.classList.remove("oculto");
  } else if (vista === "summary") {
    viewSummary.classList.remove("oculto");
  }
}

// Clics en los círculos temáticos
document.querySelectorAll(".btn-circle").forEach(boton => {
  boton.addEventListener("click", () => {
    const tema = boton.getAttribute("data-theme");
    iniciarLeccion(tema);
  });
});

// ==========================================
// LÓGICA DE LA LECCIÓN (20 PREGUNTAS)
// ==========================================
function iniciarLeccion(tema) {
  temaActual = tema;
  indicePregunta = 0;
  vidas = 3;
  aciertos = 0;
  errores = 0;
  respondido = false;
  opcionSeleccionada = null;

  mostrarVista("quiz");
  cargarPreguntaActual();
}

function cargarPreguntaActual() {
  respondido = false;
  opcionSeleccionada = null;

  // Restaurar bandeja
  feedbackTray.className = "feedback-tray neutral";
  feedbackMsg.innerHTML = "";
  btnAction.textContent = "COMPROBAR";
  btnAction.className = "btn-duo btn-action disabled";

  const lista = BANCO_PREGUNTAS[temaActual];
  const item = lista[indicePregunta];

  // Avance
  questionStep.textContent = `Pregunta ${indicePregunta + 1} de ${lista.length}`;
  questionText.textContent = item.p;
  quizHeartsCount.textContent = vidas;

  // Barra de progreso
  const porcentaje = ((indicePregunta) / lista.length) * 100;
  quizProgressFill.style.width = `${Math.max(5, porcentaje)}%`;

  // Renderizar las 4 opciones de opción múltiple
  optionsGrid.innerHTML = "";
  item.opts.forEach(opcion => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-btn";
    btn.textContent = opcion;

    btn.addEventListener("click", () => {
      if (respondido) return;
      document.querySelectorAll(".opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      opcionSeleccionada = opcion;
      btnAction.classList.remove("disabled");
    });

    optionsGrid.appendChild(btn);
  });
}

// Botón Comprobar / Continuar
btnAction.addEventListener("click", () => {
  if (!respondido) {
    if (!opcionSeleccionada) return;
    comprobarRespuesta();
  } else {
    avanzarSiguientePregunta();
  }
});

function comprobarRespuesta() {
  respondido = true;
  const lista = BANCO_PREGUNTAS[temaActual];
  const item = lista[indicePregunta];
  const esCorrecta = (opcionSeleccionada === item.c);

  const botones = document.querySelectorAll(".opt-btn");
  botones.forEach(btn => {
    if (btn.textContent === item.c) {
      btn.classList.add("correct-visual");
    } else if (btn.textContent === opcionSeleccionada && !esCorrecta) {
      btn.classList.add("wrong-visual");
    }
  });

  if (esCorrecta) {
    aciertos++;
    feedbackTray.className = "feedback-tray correct";
    feedbackMsg.innerHTML = `
      <div class="icon-badge">✓</div>
      <div>
        <h3>¡Excelente!</h3>
        <p>${item.exp}</p>
      </div>
    `;
    btnAction.className = "btn-duo btn-action";
    btnAction.textContent = "CONTINUAR";
  } else {
    errores++;
    vidas--;
    quizHeartsCount.textContent = vidas;
    feedbackTray.className = "feedback-tray wrong";
    feedbackMsg.innerHTML = `
      <div class="icon-badge">✕</div>
      <div>
        <h3>Respuesta correcta: ${item.c}</h3>
        <p>${item.exp}</p>
      </div>
    `;
    btnAction.className = "btn-duo btn-action wrong-mode";
    btnAction.textContent = "ENTENDIDO";

    // Si pierde las 3 vidas -> Game Over
    if (vidas <= 0) {
      setTimeout(() => {
        mostrarResumenFinal(false);
      }, 1400);
      return;
    }
  }
}

function avanzarSiguientePregunta() {
  const lista = BANCO_PREGUNTAS[temaActual];
  indicePregunta++;

  if (indicePregunta >= lista.length) {
    quizProgressFill.style.width = "100%";
    mostrarResumenFinal(true);
  } else {
    cargarPreguntaActual();
  }
}

btnQuitQuiz.addEventListener("click", () => {
  if (confirm("¿Seguro que deseas salir? Perderás el progreso de esta lección.")) {
    mostrarVista("path");
  }
});

// ==========================================
// RESUMEN FINAL Y PUNTUACIÓN
// ==========================================
function mostrarResumenFinal(victoria) {
  mostrarVista("summary");

  const total = BANCO_PREGUNTAS[temaActual].length;
  const porcentaje = Math.round((aciertos / total) * 100);
  const xpGanados = aciertos * 10;

  sumCorrect.textContent = aciertos;
  sumWrong.textContent = errores;
  sumPercent.textContent = `${porcentaje}%`;
  sumXp.textContent = `+${xpGanados} XP`;

  if (victoria) {
    summaryHeroIcon.textContent = "🏆";
    summaryTitle.textContent = "¡Lección Completada!";
    summarySub.textContent = `Has superado las 20 preguntas del módulo de ${temaActual.toUpperCase()}.`;

    // Guardar en la Base de Datos
    const user = getUsuarioActivo();
    if (user) {
      const datos = getDatosUsuario();
      datos.xp = (datos.xp || 0) + xpGanados;
      datos.coronas = datos.coronas || {};
      datos.coronas[temaActual] = true; // Corona ganada
      guardarProgresoUsuario(datos);
    }
  } else {
    summaryHeroIcon.textContent = "💔";
    summaryTitle.textContent = "Te quedaste sin vidas";
    summarySub.textContent = "Has perdido tus 3 corazones. ¡No te rindas y vuelve a intentarlo!";
  }

  actualizarBarraNav();
}

// Botones del resumen
btnRetry.addEventListener("click", () => {
  iniciarLeccion(temaActual);
});

btnFinishHome.addEventListener("click", () => {
  mostrarVista("path");
});

// ==========================================
// GESTIÓN DE SESIÓN & BASE DE DATOS
// ==========================================
function actualizarBarraNav() {
  const user = getUsuarioActivo();
  const datos = getDatosUsuario();

  navXp.textContent = `${datos.xp || 0} XP`;
  navHearts.textContent = "3";

  // Conteo de coronas (de los 5 módulos)
  const coronasGanadas = Object.values(datos.coronas || {}).filter(Boolean).length;
  navCrowns.textContent = `${coronasGanadas}/5`;

  if (user) {
    navUserTag.textContent = `@${user}`;
    btnLoginModal.classList.add("oculto");
    btnLogout.classList.remove("oculto");
  } else {
    navUserTag.textContent = "Invitado";
    btnLoginModal.classList.remove("oculto");
    btnLogout.classList.add("oculto");
  }
}

function renderizarCoronasEnPath() {
  const datos = getDatosUsuario();
  const modulos = ["sumas", "restas", "multiplicaciones", "divisiones", "problemas"];

  modulos.forEach(mod => {
    const badge = document.getElementById(`badge-${mod}`);
    if (badge) {
      if (datos.coronas && datos.coronas[mod]) {
        badge.textContent = "👑 ¡Completado!";
        badge.classList.add("won");
      } else {
        badge.textContent = "⚪ Pendiente";
        badge.classList.remove("won");
      }
    }
  });
}

// Modal Auth
btnLoginModal.addEventListener("click", () => {
  authError.classList.add("oculto");
  authUser.value = "";
  authPass.value = "";
  modalLogin.classList.remove("oculto");
  authUser.focus();
});

btnCloseModal.addEventListener("click", () => {
  modalLogin.classList.add("oculto");
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const u = authUser.value.trim().toLowerCase();
  const p = authPass.value.trim();

  if (!u || !p) {
    authError.textContent = "Completa el usuario y la contraseña.";
    authError.classList.remove("oculto");
    return;
  }

  const db = cargarBaseDatos();

  // Validar si existe o registrar automáticamente
  if (db[u]) {
    if (db[u].pass !== p) {
      authError.textContent = "Contraseña incorrecta para @" + u;
      authError.classList.remove("oculto");
      return;
    }
  } else {
    db[u] = {
      pass: p,
      xp: 0,
      coronas: {}
    };
    guardarBaseDatos(db);
  }

  localStorage.setItem(SESSION_NAME, u);
  modalLogin.classList.add("oculto");
  actualizarBarraNav();
  renderizarCoronasEnPath();
});

btnLogout.addEventListener("click", () => {
  localStorage.removeItem(SESSION_NAME);
  actualizarBarraNav();
  renderizarCoronasEnPath();
});

// Iniciar aplicación
init();