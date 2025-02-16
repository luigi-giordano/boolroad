const trips = [
  {
    id: "1",
    destination: "Paris, France",
    itinerary: "City tour, visit to the Louvre, Seine river cruise",
    startDate: "2025-06-10",
    endDate: "2025-06-17",
    guides: "Niccolò Balini",
    price: 1200,
    participants: [
      {
        id: "100",
        gender: "male",
        firstName: "Mario",
        lastName: "Rossi",
        taxCode: "RSSMRA80A01H501Z",
        phone: "+39 345 678 9012",
        email: "mario.rossi@example.com",
        emergencyContact: "+39 320 987 6543"
      },
      {
        id: "101",
        gender: "female",
        firstName: "Laura",
        lastName: "Bianchi",
        taxCode: "BNCLRA85C41H501T",
        phone: "+39 333 444 5556",
        email: "laura.bianchi@example.com",
        emergencyContact: "+39 320 112 2334"
      },
      {
        id: "102",
        gender: "male",
        firstName: "Alessandro",
        lastName: "Verdi",
        taxCode: "VRDLSA85A99Z404D",
        phone: "+39 335 123 4567",
        email: "alessandro.verdi@example.com",
        emergencyContact: "+39 329 777 8888"
      },
      {
        id: "103",
        gender: "female",
        firstName: "Sofia",
        lastName: "Neri",
        taxCode: "NRISOF94C01F205B",
        phone: "+39 345 666 7890",
        email: "sofia.neri@example.com",
        emergencyContact: "+39 320 444 5678"
      },
      {
        id: "104",
        gender: "male",
        firstName: "Giovanni",
        lastName: "Rossi",
        taxCode: "RSSGVN85D12F205R",
        phone: "+39 347 321 6543",
        email: "giovanni.rossi@example.com",
        emergencyContact: "+39 320 555 4433"
      }
    ]
  },
  {
    id: "2",
    destination: "New York, USA",
    itinerary: "Statue of Liberty, Times Square, Central Park",
    startDate: "2025-09-05",
    endDate: "2025-09-15",
    guides: "Stefano Corradi",
    price: 2500,
    participants: [
      {
        id: "105",
        gender: "male",
        firstName: "Giovanni",
        lastName: "Verdi",
        taxCode: "VRDGNN90D12F205R",
        phone: "+39 366 555 7890",
        email: "giovanni.verdi@example.com",
        emergencyContact: "+39 329 876 5432"
      },
      {
        id: "106",
        gender: "no binary",
        firstName: "Elisa",
        lastName: "Neri",
        taxCode: "NRELIS95E22H501A",
        phone: "+39 377 888 9990",
        email: "elisa.neri@example.com",
        emergencyContact: "+39 328 223 4455"
      },
      {
        id: "107",
        gender: "female",
        firstName: "Marta",
        lastName: "Toscano",
        taxCode: "TSCMRT80A41L404D",
        phone: "+39 338 555 9876",
        email: "marta.toscano@example.com",
        emergencyContact: "+39 328 654 1234"
      },
      {
        id: "108",
        gender: "male",
        firstName: "Luca",
        lastName: "Corsi",
        taxCode: "CRSLUC78B99H501V",
        phone: "+39 340 123 4567",
        email: "luca.corsi@example.com",
        emergencyContact: "+39 320 998 7744"
      },
      {
        id: "109",
        gender: "female",
        firstName: "Anna",
        lastName: "Ricci",
        taxCode: "RCCANNA81A01Z404Y",
        phone: "+39 349 876 4321",
        email: "anna.ricci@example.com",
        emergencyContact: "+39 328 999 5555"
      }
    ]
  },
  {
    id: "3",
    destination: "Tokyo, Japan",
    itinerary: "Visit to the Shibuya Crossing, Mount Fuji, Senso-ji Temple",
    startDate: "2025-11-01",
    endDate: "2025-11-10",
    guides: "Akira Tanaka",
    price: 3000,
    participants: [
      {
        id: "110",
        gender: "female",
        firstName: "Yuki",
        lastName: "Sato",
        taxCode: "STYUKI85D01M403K",
        phone: "+81 90 1234 5678",
        email: "yuki.sato@example.com",
        emergencyContact: "+81 80 8765 4321"
      },
      {
        id: "111",
        gender: "male",
        firstName: "Haruto",
        lastName: "Yamamoto",
        taxCode: "YMHARU84T12J501A",
        phone: "+81 80 6543 2109",
        email: "haruto.yamamoto@example.com",
        emergencyContact: "+81 90 1234 5678"
      },
      {
        id: "112",
        gender: "female",
        firstName: "Mai",
        lastName: "Tanaka",
        taxCode: "TANMAI88C45Q111J",
        phone: "+81 70 9876 5432",
        email: "mai.tanaka@example.com",
        emergencyContact: "+81 90 6543 2109"
      },
      {
        id: "113",
        gender: "male",
        firstName: "Kaito",
        lastName: "Kobayashi",
        taxCode: "KOKAIT88T23A402D",
        phone: "+81 90 8765 4321",
        email: "kaito.kobayashi@example.com",
        emergencyContact: "+81 80 1234 5678"
      },
      {
        id: "114",
        gender: "female",
        firstName: "Sakura",
        lastName: "Nakamura",
        taxCode: "NKSUKA86D22J702C",
        phone: "+81 70 1234 5678",
        email: "sakura.nakamura@example.com",
        emergencyContact: "+81 90 3214 8765"
      }
    ]
  },
  {
    id: "4",
    destination: "Sydney, Australia",
    itinerary: "Opera House, Bondi Beach, Sydney Tower",
    startDate: "2025-12-01",
    endDate: "2025-12-10",
    guides: "David Williams",
    price: 2000,
    participants: [
      {
        id: "115",
        gender: "male",
        firstName: "Daniel",
        lastName: "Smith",
        taxCode: "SMTDAN83A01Z404X",
        phone: "+61 412 345 678",
        email: "daniel.smith@example.com",
        emergencyContact: "+61 400 123 456"
      },
      {
        id: "116",
        gender: "female",
        firstName: "Emily",
        lastName: "Jones",
        taxCode: "JNSEML90T12D701V",
        phone: "+61 421 234 567",
        email: "emily.jones@example.com",
        emergencyContact: "+61 400 654 321"
      },
      {
        id: "117",
        gender: "male",
        firstName: "Jack",
        lastName: "Johnson",
        taxCode: "JNCJCK91P25D702F",
        phone: "+61 412 987 654",
        email: "jack.johnson@example.com",
        emergencyContact: "+61 400 876 543"
      },
      {
        id: "118",
        gender: "female",
        firstName: "Olivia",
        lastName: "Williams",
        taxCode: "WLMOLI88D15Z402Y",
        phone: "+61 423 555 678",
        email: "olivia.williams@example.com",
        emergencyContact: "+61 400 321 654"
      },
      {
        id: "119",
        gender: "male",
        firstName: "Ethan",
        lastName: "Davis",
        taxCode: "DVTETH87T12A703K",
        phone: "+61 431 987 654",
        email: "ethan.davis@example.com",
        emergencyContact: "+61 400 987 654"
      }
    ]
  }
];

export default trips
