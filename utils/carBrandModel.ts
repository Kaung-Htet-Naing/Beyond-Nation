export const carList = [
  {
    name: "Tesla",
    manufacturer_id: "tesla",
    model_list: [
      {
        name: "Model S",
        manufacturer_id: "model_s",
      },
      {
        name: "Model 3",
        manufacturer_id: "model_3",
      },
      {
        name: "Model X",
        manufacturer_id: "model_x",
      },
      {
        name: "Model Y",
        manufacturer_id: "model_y",
      },
    ],
  },
  {
    name: "Chevrolet",
    manufacturer_id: "chevrolet",
    model_list: [
      {
        name: "Bolt EV",
        manufacturer_id: "bolt_ev",
      },
    ],
  },
  {
    name: "Nissan",
    manufacturer_id: "nissan",
    model_list: [
      {
        name: "Leaf",
        manufacturer_id: "leaf",
      },
    ],
  },
  {
    name: "Hyundai",
    manufacturer_id: "hyundai",
    model_list: [
      {
        name: "Kona Electric",
        manufacturer_id: "kona_electric",
      },
    ],
  },
  {
    name: "Kia",
    manufacturer_id: "kia",
    model_list: [
      {
        name: "Soul EV",
        manufacturer_id: "soul_ev",
      },
    ],
  },
  {
    name: "Audi",
    manufacturer_id: "audi",
    model_list: [
      {
        name: "e-tron",
        manufacturer_id: "e_tron",
      },
    ],
  },
  {
    name: "Jaguar",
    manufacturer_id: "jaguar",
    model_list: [
      {
        name: "I-PACE",
        manufacturer_id: "i_pace",
      },
    ],
  },
  {
    name: "BMW",
    manufacturer_id: "bmw",
    model_list: [
      {
        name: "i3",
        manufacturer_id: "i3",
      },
    ],
  },
  {
    name: "Porsche",
    manufacturer_id: "porsche",
    model_list: [
      {
        name: "Taycan",
        manufacturer_id: "taycan",
      },
    ],
  },
  {
    name: "Ford",
    manufacturer_id: "ford",
    model_list: [
      {
        name: "Mustang Mach-E",
        manufacturer_id: "mustang_mach_e",
      },
    ],
  },
  {
    name: "Volkswagen",
    manufacturer_id: "volkswagen",
    model_list: [
      {
        name: "manufacturer_id.4",
        manufacturer_id: "manufacturer_id4",
      },
    ],
  },
  {
    name: "Rivian",
    manufacturer_id: "rivian",
    model_list: [
      {
        name: "R1T",
        manufacturer_id: "r1t",
      },
    ],
  },
  {
    name: "Lucmanufacturer_id",
    manufacturer_id: "lucmanufacturer_id",
    model_list: [
      {
        name: "Air",
        manufacturer_id: "air",
      },
    ],
  },
  {
    name: "Polestar",
    manufacturer_id: "polestar",
    model_list: [
      {
        name: "Polestar 2",
        manufacturer_id: "polestar_2",
      },
    ],
  },
  {
    name: "Mercedes-Benz",
    manufacturer_id: "mercedes",
    model_list: [
      {
        name: "EQC",
        manufacturer_id: "eqc",
      },
    ],
  },
  {
    name: "Volvo",
    manufacturer_id: "volvo",
    model_list: [
      {
        name: "XC40 Recharge",
        manufacturer_id: "xc40_recharge",
      },
    ],
  },
  {
    name: "Toyota",
    manufacturer_id: "toyota",
    model_list: [
      {
        name: "RAV4 Prime",
        manufacturer_id: "rav4_prime",
      },
    ],
  },
]

export const CarModelList = (name: string) => {
  return carList.find(
    (car: { name: string; manufacturer_id: string }) => car.name === name
  )
}

export const CarMakeList = carList.map((car) => {
  return { name: car.name, manufacturer_id: car.manufacturer_id }
})
