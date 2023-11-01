import React,{useEffect,useState} from 'react';
import './Вynamicpage.css'
import Item from "../../components/Item/Item"
import Loader from '../../components/Loader/Loader';
import { useRoute } from '../../components/Header/nav/RouteContext.js'

const Вynamicpage = () => {
  const data ={ 
     Meat: [
    {
      "id": "01",
      "category": "Мясо",
      "name": "Стейк томагавк",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlqyB3CAga1f/Fo_gTq6VZN0NEkZQfME-ZAZDjzEHf1L_/OngFQUqMe0YOu7Gjq_RZMRV2qQ_ogRjy/cDKgOaNvvehyCTas3utMd3VdhBxGB0wf/xLGEBcHTjrzyJj_kAU_QHg10cZm5qja7/rsPi73Ni4rU.jpg",
      "description": "Ароматный стейк на костях, которая придает мясу отличительный вкус, который не найти у других стейков",
      "price": 1790
    },
    {
      "id": "02",
      "name": "T-бон стейк",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOgiGgsh-opCY/B97JRRFQJW1m7DfIJT43FlNt0uuAmQan/mHtqxPCKdbmah9gdP9iXVlRjOC49szLk/N0aPyM2Kpn5aza5yXYgxO6ntmfJyJc6f/ItAalS-yMZB_s5jhaZ6bs3SwH8sEpGz9/Se8m1cARZdg.jpg",
      "description": "Нежный, ароматный стейк подается с картошкой по деревенским и помидорами черри соусом демиглас",
      "price": 920      
    },
    {
      "id": "03",
      "name": "Рибай стейк",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmyZTlFpk468/lPltS__L13bVAOlQQl6o-LeBpynp2Cd7/nroR75XIVr3ot1ZmISjC7lM0m13LvwYX/k1uu7vJyCDB_uekN-O90DZjibTHkbt5c/8Titd6u1g09mhhf8MYSqJMKYyAGIvfZW/UBItw_APCKw.jpg",
      "description": "Рибай - нежное и сочное мясо говядины, подается с картошкой по деревенским и   помидорами черри соусом демиглас",
      "price": 990
    },
    {
      "id": "04",
      "name": "Каре ягнёнка на гриле",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOkXLAs7VhVae/tpG8dTtJB4tm2GcZYJu5WBZW4vI2F2du/k2Hho6FuNd0fPKNdfdM4ivePh6DJRz0H/3uDwfZHJPFBj6RdX2RbFijws4a-_1pYB/nBTHObdLcMpXO5ATBF2cV0WSzMQ_wSVe/R_1g7yQqhX8.jpg",
      "description": "Сочная карейка молодого барашка обжаренная на гриле подается на лаваше с свежими овощами",
      "price": 830
    },
    {
      "id": "05",
      "name": "Медальоны с овощами на гриле и с соусом песто",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOvpRwOhBotQ9/juZVWxJY4TrDTGsuACs8CyJ1k8c9naOn/6pDrVkKqo2_pPxalS3NNkBBSjBuG1pnO/XpagR-L1PreE8ZtC3Da8dtlJpu7NfHne/kgsdKkaK-MYygfFXD24VtkflzOEmRYNm/MM6k3DQzG5A.jpg",
      "description": "Нежные медальоны с припущенным брокколи  и помидором черри",
      "price": 890
    },
    {
      "id": "06",
      "name": "Медальоны в грибном соусе",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOq5Fa_4ZNAJl/aBO-eE8eWqzeo2rso22Fes_qTPdLJfd8/DuuCwzN_IfA4YltdMmXnvkyGu7-ANpn5/95th43Epe2lejK6RvkOPp5SBVbmZjUcZ/OavIgsTwt8EbWVbpQ9DSoJYm2WmbGUj5/Cm8wxdbCxuI.jpg",
      "description": "Нежные медальоны в сливочно-грибном соусе с картофельным пюре",
      "price": 890
    },
    {
      "id": "07",
      "name": "Томлёная баранина голень с пюре",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlsC0RT1OsH6/N-SvE3qXcVZ-iY77ufCprN4bxwJowTO5/o51UGeHG3lSJabMpMHK3NYqbFakCkfB4/pSpaT6ytbcfrkRJswPqf1WiL_JxXQqF0/uslIKDNv7TEw4hPALBSbSbBx24hYTFUL/y6LOwT_ozbk.jpg",
      "description": "Нежнейшая  томленная голень баранины  подается с пюре и собственным соком",
      "price": 990
    },
    {
      "id": "08",
      "name": "Манты с говядиной",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOuLSWVq0qog_/z9JHyqqvbNChuqKR6PbfeoEd9LikJ7Yx/dS4yB1OXXR2x7vNJwU7OB_OKIdyGBGOX/fxaDzQA_pcqdAZcHU77GnR2hFSaGwT5V/gokyM_Z281tB88gwXXOiaThrwhaOOdxx/5jpItI_-PKY.jpg",
      "description": "Домашние манты ручной лепки",
      "price": 380
    },
    {
      "id": "09",
      "name": "Колбаса пепперони с картошкой",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOuLSWVq0qog_/z9JHyqqvbNDzjVzzTIUB2Q_dU308v-I4/sK3mfbbQQ_lwGDku0twoGFnZfO4B8FEH/kax2X2nYaEGEVUOO5nOKHMNkPYil9Ylz/B2-TJJO-MXmvIuCTMB-fQLj7CR0xqXCt/iNvvBl_WVUc.jpg",
      "description": "Колбаски пепперони и картофель по деревенски и с квашеной капустой",
      "price": 760
    },
    {
      "id": "010",
      "name": "Говяжий кебаб с рисом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOhdXXPrqJoyy/lktGBvyrWGDTP-rEGnaMvTDwuoeKhcI4/YbNgk_EYsugbeaZFH5KYKUEClrS18jVy/5EN-i2PhNaHCcJhCC_iKJjIWfOWc1kZi/ZqPu-IZBPPspdESqLHTry-CK3udFtv5d/cXaldZORoLg.jpg",
      "description": "Турецкий сочный кебаб подается с рисом и фирменным соусом для кебаба",
      "price": 420
    }
  ],
  Chicken: [
    {
      "id": "11",
      "category": "Курица",
      "name": "Куриная грудка с сыром и пюре",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOguJjQ-mgRwr/ZuVP4uGL6HyzMeeZImF_34A6GtvVgFdA/Gc5fols93rGk6LGTxsFJo4zhGj8RaXF8/199Xu495gyl0x2TkNO47gx1E71_YTECH/6--bW5YPHc808tI-Iqr-uk7kxyLc4AIC/bi15pRLxgh4.jpg",
      "description": "Запеченная куриная грудка в сливочном соусе, подается с картофельным пюре.",
      "ingredients": " Куриная грудка  Кабачки  Помидоры  Сыр тильзитский  и Пюре",
      "price": 460
    },
    {
      "id": "12",
      "name": "Цыпленок корнишоны",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOravaLFnxlV9/_r4Owrw6EYKIcc8k0LoYhI2z9L9aorIX/BqVcwUEbxupcAgmHliGwRViRELJpRyaW/2VdX2b6jFpymh24OLWAthicGq5yZE30V/dSG1u2okdP57tnwqP0CC0osj8nrTI65c/sYyiEeXH6TU.jpg",
      "description": "Маринованный цыпленок обжаренный на гриле с брокколи и запеченной картошкой на духовке",
      "price": 560
    },
    {
      "id": "13",
      "name": "Утиная грудка",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOq0aH65wPla7/v9n78AWA5aWpQiPBWqB8JIB7_cyfnB9H/kKiWBz8zrwwCsCcyLLG8Qkx4xFUXZAmU/j8soCJ6U1a5Yb1shd_6hsUCGsdolEzNI/UvXdnrieCA1iCZNAcvfk5GFclkU5Eb4H/qWQwn0XNijA.jpg",
      "description": "Ломтики утиной грудки в соусе терияки с ореховым соусом и салатом чука",
      "price": 580
    },
    {
      "id": "14",
      "name": "Куриная грудка в терияки",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlH2haT1LDUP/LKX-uBUG_gzx72puUlIoQ6Is3E1EBSYa/kHvEBKi1Wr4ul5dVgdlukOWLfkK4SD8x/hQps-3dfFSMzR0YVXGwDghC1FO5qXBwj/QghooOT1K8iGb_lzGibgiCrdEokXIBVu/JSO1bCwO2sU.jpg",
      "description": "Куриная грудка в кисло-сладко-остром соусе с овощами на подушке из отварного риса",
      "ingredients": "Куриное бедро, Болгарский перец, Огурцы, Рис, Терияки соус, Маринованные огурцы, Кунжут",
      "price": 490
    },
    {
      "id": "15",
      "name": "Цыплёнок каццу",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmM4tpp3EWvQ/kEIxV_RoewbJHwjearWQiKDcldy9WJe1/RDnPZsAUdLIV-9r0yu0_H-oe_VgZKJk7/5oMp76-nFePknCDplpQ52-_ylBfH1_LQ/8ZWs1frVi6YGQfLLy0K3D9qQ4e8FwyIQ/z4EQ8fenbuM.jpg",
      "description": " Куриное филе так же панируют в пшеничной муке, затем обмакивают в яичную смесь и, в завершение, обваливают в панировочных сухарях. Подготовленную таким образом курятину жарят в разогретом до 160-170°С растительном масле до образования золотистой хрустящей корочки",
      "price": 380
    }
  ],
  Fish: [
    {
      "id": "21",
      "category": "Рыба",
      "name": "Форель на подушке из шпината",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOravaLFnxlV9/_r4Owrw6EYICYDKC8pBniaxnyFL1rOiM/O7oi3P1SQe0nAgQOuyGern2z8SciV1s-/XdtuggIF8vJ9JdoDj1zDlkHIZVeOJ9kJ/7deHmGYqApe2w3SfxqfmbkqEEmhiUm8a/M7LoiSuuKzI.jpg",
      "description": "филе форели обжаривается на гриле, на тарелку выливается соус том ям, сверху выкладывается шпинат на него филе рыбы",
      "price": 790
    },
    {
      "id": "22",
      "name": "Стейк из лосося",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOuGnmn-Crwop/cDeDGa3Z23gAtGKO51VfmSuH7-49qnuU/FBpu9uoEtfUgAn4PoFHpRJeLSZ65dbRw/xRNfP75ctGBRPx3Xz6uM6jY2cVZnxrsI/Rz681l5xzoOeRbNNag5DR8A4Mp8wZzkN/ZX-s3gCv78I.jpg",
      "description": "Нежное филе семги обжаренная на гриле с овощами",
      "price": 990
    },
    {
      "id": "23",
      "name": "Лосось под кукурузным соусом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOtsIjV45opi_/Ut63_6e73Cn0rCN3jjv4eHxF2mPHGIJq/OD55qY2etXpeQzQy22NpuB_bDEuaqkLs/bBCP6FEOh2Hc4Xs7WIan50qd9UqaFu7_/qPJrjHIMBJZ06NWshTwjtlWhow-t6YZ8/A4jMUwKbkc8.jpg",
      "description": "Стейк из семги под изысканным кукурузным соусом. подается с рисом и овощами",
      "price": 990
    },
    {
      "id": "24",
      "name": "Форель на гриле с овощами",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOvpRwOhBotQ9/juZVWxJY4TqWWl5xNaGGQloKlaiH_31y/QEm3YQkCN5F_PSDhRm85Id0dzxddBXyM/hzwXfqZgFRPBCcFHHE0E3XYl7ZlZRHoS/gvN_8iaM2_3F80oh6pT6mxHgx2fgJJVi/vzqEtYshvx8.jpg",
      "ingredients": "Форель,  Цуккини, Баклажаны, Перец, Помидоры,  Лук, Шампиньоны,  Лимон,  Чесночный соус",
      "price": 780
    }
  ],
  Paste: [
    {
      "id": "31",
      "category": "Паста",
      "name": "Фетучини с курицей в трюфельном соусе ",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOgiGgsh-opCY/B97JRRFQJW1VQ0H2WuR3wRly6aoQlhyk/OZBwjYBBHkmqWTZwnu85TOCemGr7F3s8/K34cqVp7d5-vpruPCX6AStpti_nMKqda/2tBbz54QcV6pQju8n4PWzGI4J3K-R0cY/RkTx6dzryw0.jpg",
      "description": "Достояние итальянской кухни, необычайно нежное фетучини с курицей и грибами в сливочном соусе",
      "price": 520
    },
    {
      "id": "32",
      "name": "Карбонара с говяжьим беконом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOvpRwOhBotQ9/juZVWxJY4TooID2Rfm9QoXfexAk_W9we/qHnIO4waJjfnG3tD3ybKr0jPzldRIi8W/1nQ3T-UcocVie2oUBtfC4YP4PImsetf9/Xl-yAtpJZ24ItcHLnQCsXOuE5_vrH-DS/ChxVnMSGnLg.jpg",
      "description": "Итальянская классическая Ароматная паста с говяжьим беконом",
      "price": 480
    },
    {
      "id": "33",
      "name": "Лингвини с креветками",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlYRG71buOEy/8QUiJLBW978VywV594JYhw7x6ZyWlUax/Uep-FknTxkkilZZRrmma6cg8yn3iz9PW/rqrjVroy42OoF9WvqpVo_6Z55fb5lVwg/FRAOd0QcNTwPwQZWXXN2GKNpxNK_PGO2/KlvYm6lxz-E.jpg",
      "description": " это длинная круглая паста немного толще спагетти доводиться до состояния готовности. Тигровые креветки обжариваем на оливковом масле с чесноком, добавляется немного красного чили, стебель петрушки, рыбный бульон затягивается сливочным маслом. Смешиваем с пастой и украшается томатами черри, сыром пармезан и рубленной петрушкой.",
      "price": 580
    },
    {
      "id": "34",
      "name": "Паста с креветками и с кальмаром",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOn0WIfFuSneD/Iw0PHfkMYl9DzsFnfM9k_SZmGxkssZEE/ld4AdBfdzdbWsoOEFWzvZwOl_bCNH4tE/i4IISE4EPaJ_WMNWWGFFpG4gmzVHrqC_/80YzrAOVbsWJVB_vh1_F_GkJumQgXEZ1/VsSH8z4NTh4.jpg",
      "description": "Вкуснейшая паста с креветками и кальмарами с соусом польпа",
      "ingredients": "Спагетти * Креветки * Кальмары * Кабачки * Болгарский перец * Соус польпа и секретный ингредиент ЛЮБОВЬ повара к своей работе",
      "price": 560
    },
    {
      "id": "35",
      "name": "Вок лапша с говядиной",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlbaV2g2tIbG/jHXTVB4IMuf7k1RFIrN8MPtIY5ZCP7FB/j9NLEDMkLn2ss6DGCAgzl13G_MdnWBtQ/eFTtdTihTCvfmccFKCT7u7-_itlO-q3Y/FsJ6eHNmqUNKgVhzmebFOdoh2TUkDweA/sTjgRtM23No.jpg",
      "description": "Лапша удон с курицей и овощами, удивительно сытное и полезное блюдо",
      "price": 460
    },
    {
      "id": "36",
      "name": "Вок лапша с курицей",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOiUxxRlXkDOs/Hw4WWmQUNC_rUzxgVGYQqxAIST1Rvejm/gsr_aaA3zf1j91xdvRH9q0_Wzv7Fp5DX/bjbRBX-2XPldSZh9Aa9SO62UTi14VpLo/gH-HwB9E8fKWPjFQJ-cIcB4a3UipBsYl/J5uslxRvH1M.jpg",
      "description": "Лапша удон с курицей и овощами, удивительно сытное и острое  блюдо",
      "price": 420
    }
  ],
  salads: [
    {
      "category": "Салаты",
      "id": 41,
      "name": "Непростой салат",
      "description": ' "Непростой салат" - это взрыв вкусов и нестандартное сочетание ингредиентов, которое потрясает и озаряет наше восприятие о классических салатах. На первый взгляд это просто обычный салат, но по мере того, как вы пробуете каждый его компонент, вы погрузитесь в мир смелых и неповторимых вкусов.',
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlsC0RT1OsH6/N-SvE3qXcVaa4pgpRQwSYFFpR3KIkm75/QLerFDBdqJ3MJlenWE23cEc48e7ums8K/J78PUi4GDSQ5-iBrwOKO0ejOsADGwtNn/F6XPIVs6uCEETfUD8CoPBLZVyOZd_K2I/ZT_6JQnxJoY.jpg",
      "ingredients": [
        "Фрукты: спелые манго, которое добавляет сладость и экзотическую нотку.",
        "Орехи: хрустящие грецкие, тыквенные и подсолнечные орехи, которые придают салату пикантность и аромат. В микс салат входит Свежие хрустящие огурцы,ароматные сочные помидоры,свежие листья салата, руколла  аромтный острый и немного горький вкус отвечают горчичные масла ,содержащие в семенах. Поэтому руккола часто добавляется в зелёные салаты в качестве приправы.",
      ],
      "description2":'"Непростой салат" - это феерическое шоу вкусов, которое разбудит в вас новые вкусовые ощущения и оставит яркие воспоминания на долгое время. Это блюдо для тех, кто ищет нечто особенное и неповторимое.',
      "price": 410
    },
    {
      "id": 42,
      "name": "Греческий салат",
      "description": "Греческий салат - это воплощение свежести и средиземноморского вкуса в каждом кусочке. Это классическое блюдо просто лучшее, что может предложить греческая кухня. Этот салат состоит из следующих компонентов:",
      "ingredients": [
        "Сочные кусочки свежих огурцов, которые добавляют свежесть и хрустящую текстуру к каждому кусочку.",
        "Ароматные кусочки спелых помидоров, придающих сладковатый вкус и сочность.",
        "Соусатые кусочки красного лука, чтобы добавить нотку остроты и характера.",
        "Свежие сладкие перцы, которые усиливают вкусовое разнообразие и придают яркость цвета.",
        "Полоски соленого и пикантного фета сыра, добавляющие кремовую и насыщенную нотку, которая обжигает язык.",
        "Сочные маслины, придающие слегка соленый и насыщенный вкус.",
        "Цитрусовый соус"
      ],
      "description2": "Все эти ингредиенты смешиваются в совершенном сочетании, чтобы создать праздник вкусов, который превосходит все ожидания. Греческий салат - это летняя свежесть, яркость и аромат, который переносит вас в залитое солнцем средиземноморское побережье. Это блюдо, которое заставляет вас почувствовать гармонию в каждом кусочке и искушает вас стать настоящим ценителем греческой кухни.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOiUxxRlXkDOs/Hw4WWmQUNC8WHNa7gZoD_8lS-N-JrSJv/zOUCXEI47RRMlJIyMX2VoU1W4dWgAICZ/YHmY-lLieU1o97xHG0HFwC9wXwbPeqh4/EAZkBe6ZhU_dSdqnYdjLvLF3GZ2LWJpy/avw_Aw-zKt0.jpg",
      "price": 410
    },
    {
      "id": 43,
      "name": "Цезарь попкорн с курицей",
      "description": "Классический салат цезарь с соусом на основе домашнего майонеза. Его изюминка в том, что куриное бедро маринуется в кефире, панируется в кукурузном крахмале и обжаривается в раскалённом растительном масле ( создавая эффект воздушности )",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOguJjQ-mgRwr/ZuVP4uGL6Hwt70JDlZ0VXjvzbCQgx86n/g8EAfe3q7SjiRhh8UgbcCzdMANJK9da1/JfQOom2gzRlG_TBczisFYnoLJk2v5MNS/dqJZ-PSo-345juljJPwmdrswH816ucBj/4nl70B1brZc.jpg",
      "price": 470
    },
    {
      "id": 44,
      "name": "Татаки лосось",
      "description": "Татаки лосось - это изысканное японское блюдо, которое приготавливается из свежего и нежного лосося, обжаренног о до сырого состояния и нарезанного на тонкие полоски. Это блюдо излучает аромат морской свежести и богатый вкус рыбы.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmyZTlFpk468/lPltS__L13Z-T8oYQWjRtMcmJS-PoEWJ/naT_JveoUwPtq9hw8OPgAjLdtDJq59Q4/B23DDDbDreStUPsFIdudy9lsF7mvDAJo/jGUDoValhso6eJmi--AWIQTcSA-cBL8K/4de_AzY4eeI.jpg",
      "descripton2":"Татаки с лососем представляет собой нежные поджаристые кусочки свежего лосося, которые являются идеальным сочетанием нежности и пикантности. Мясо лосося остается сочным и свежим внутри. После обжаривания до сырого состояния, лосось нарезается на тонкие полоски и аккуратно выкладывается на тарелку. Ярко-оранжевый цвет мяса создает эффектное визуальное представление и обещает наслаждение вкусом. Татаки лосось - это роскошное и изысканное блюдо, которое завораживает не только внешним видом, но и неповторимым вкусом. Это блюдо, которое является настоящим кулинарным опытом и позволяет насладиться изысканным вкусом.",
      "ingredients": [
        "Острый соус, который обычно состоит из соевого соуса, рисового уксуса, масла и специй, чтобы придать блюду пикантность и интенсивность.",
        "Свежие тонко нарезанные овощи, авокадо, сочные помидоры и китайская редиска дайкон , которые добавляют свежесть и текстуру к блюду.",
        "Микрозелень, которые украшают татаки и придают свежий и ароматный штрих."
      ],
      "price": 550
    },
    {
      "id": 45,
      "name": "Тёплый ростбиф салат",
      "description":"Тёплый ростбиф салат - это изысканное блюдо, состоящее из сочного ростбифа, который обжаривается на сковороде до золотистой корочки, а затем нарезается тонкими ломтиками. К ростбифу добавляются свежие и хрустящие овощи, такие как стручковая фасоль  помидоры черри и полоски пикантного  сыра Фета добавляющие кремовую и насыщенную нотку,которая слегка обжигает язык.Особенностью этого салата является то, что он подаётся тёплым. Это создает конtrastnое сочетание горячего мяса с прохладными овощами, придающее особый вкус и текстуру блюду. Чтобы придать салату более сочный и насыщенный вкус, его поливают соевым и  соусом свит Чили. Теплый ростбиф салат - это отличный выбор для любителей мяса и свежих овощей. Он может быть подан как главное блюдо на обед или ужин, а также как закуска на праздничном столе. Это блюдо не только вкусное, но и полезное, так как мясо богато белком, а овощи обладают множеством полезных витаминов и минералов.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOsTMA56q6OET/3L1PQtzzYCd9WDs_NRaCwQ_1TQIbthkw/Bc-7M5i5xOUIQRx5fHlwfPTJEDsvtsqq/d_szfnrwrw1KFOH57FnrxeYnA3rwsSqa/K1c-mXbgxGDQpvLPLF8uU5RE-Fnzi5m6/H6KcOdxrV7U.jpg",
      "price": 550
    },
    {
      "id": 46,
      "name": "Салат с говяжим языком",
      "description":"Салат с говяжим языком - это классическое блюдо, которое подается холодным. Он приготавливается с использованием сочного и нежного говяжьего языка, который предварительно варится до мягкости. Язык затем нарезается тонкими пластинами и сочетается с другими ингредиентами, чтобы создать уникальный вкус и текстуру салата. К языку добавляются различные овощи, такие как свежие помидоры, огурцы, лук и зелень. Это придает салату яркость и свежесть. Благодаря своему насыщенному вкусу и разнообразию текстур, этот салат является изысканным и аппетитным выбором для ценителей гастрономии.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOhgUv95Ywlp5/EPxQdhn1kh7jQczeg8YbIcT2ezHgQaUL/HRTjlmLKaxY7JUHk75PqHaf-ZcBHyRKM/Kt4GxtNs99ieu9JAfa0oy6Wd9DrdB1PT/qTvClup0gmnDAjRt7wvKkNs6ar9sk0XD/lsejbIpk3TM.jpg",
      "price": 420
    },
    {
      "id": 47,
      "name": "Салат с баклажаном и сальсой",
      "description": "Свежий баклажан  нарезается  дольками, маринуется в соли и воде, планируется в кукурузном крахмале, обжаривается на раскаленной сковороде. Подается с томатами черри и сыром креметто и кисло - сладким соусом чили",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOq0aH65wPla7/v9n78AWA5aVVBDYEq3oGNZhv8KYsKenK/3DCz829jssfhn0um-ZdJsngbBWXY-LT4/PQyYnkHjw5kep2m5414KE09dYxEtMgcG/qcuNIRjJcGe1T-LrGzXuAYCjmneD4C-b/KRHKEACBVus.jpg",
      "weight": "300",
      "price": 380
    },
    {
      "id": 48,
      "name": "Салат Оливье с говядиной",
      "description": "Салат Оливье с говядиной - это популярное и традиционное блюдо, которое обычно готовится на праздничных событиях. Этот салат сочетает в себе нежное мясо говядины с овощами и майонезной заправкой. Для приготовления салата Оливье с говядиной, говядина отваривается до готовности и нарезается на небольшие кубики. Добавляются также отварные картофель, морковь и яйца, которые также нарезаются кубиками. К этим основным ингредиентам добавляется маринованный огурец. Затем все ингредиенты смешиваются вместе и заправляются майонезом, который придаёт салату кремовость и насыщенность вкуса. Этот салат является популярным выбором на новогодние и рождественские праздники во многих странах. Этот салат отличается своим насыщенным вкусом и различными текстурами ингредиентов. Комбинация нежной говядины, мягкого картофеля хрустящих овощей и кремового майонеза делает его привлекательным и аппетитным для любителей мясных блюд.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOp787jjA5XfV/-WZvN7Xmg6wUzJiBPs1uUuKD4kABUF8D/TpuS2LCp0IXas86P4zdrKFL8aJpQFv14/Brgt9tQ_CqNrkAM4eYwGwZ4HZsSTS27y/JDYDHabHVS5RLhqF6RDAGt9LwNcLnP3K/dtimCXj-V2A.jpg",
      "weight": "385",
      "price": 380
    }
  ],
  snacks: [
    {
      "category": "ЗАКУСКИ",
      "id": 51,
      "name": "Креветки попкорн",
      "ingredients": [
        "Креветки в кляре заправляется  соя",
        "домашний майонез",
        "куркума подается на подушке из Айзберга"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOskSTAG4h-nn/OTnv_KbsPxHRjWVVzdxJIUDgMPlVwXvh/-xcAtzbuwK12fVf-fYK-Lj0CrXVhDV9Q/90KROGW0d2GCjsNpu2qVjPJkm7d5B5Ml/7KI6IYaXodTq_r1T04KTzWNYP7bepfwG/DyG7Pr4AKDs.jpg",
      "price": 650
    },
    {
      "id": 52,
      "name": "Крылья барбекю",
      "description": " Крылья барбекю - это сочные и ароматные куриные крылья, которые запекаются затем жарятся в соусе барбекю. Для приготовления крыльев барбекю, куриные крылья промываются, обсыпаются специями и приправами, чтобы придать им вкус и аромат. Крылья затем запекаются в духовке или до золотистой корочки и полностью пропекаются внутри. После запекания крылья обжариваются на сковороде, чтобы придать им дополнительную пикантность и мягкую текстуру. Затем крылья покрываются соусом барбекю, который придает им сладковатый и дымный вкус.Этот соус придает крыльям  богатый и насыщенный вкус. Крылья барбекю идеально подходят в качестве закуски на вечеринке и отлично сочетаются с другими гарнирами, такими как картофель фри или овощной салат. Крылья барбекю отличаются сочностью, ароматом и привлекательной внешней оболочкой. Это блюдо приятно удовлетворит ваш аппетит и превратит любой стол в уютную и вкусную вечеринку.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOvpRwOhBotQ9/juZVWxJY4TomPhzXBhb6mHdCt5Hc0zI0/YH7EY3MIWg626ZQsEElxgiOPMBSGaDZD/3AWszX6-xGroZN_BaKwitYm66xl6WNj9/rAQhIc3i8jH4tyMNW_lHl84vf5C6OivE/2RWnmqy8OUI.jpg",
      "price": 490
    },
    {
      "id": 53,
      "name": "Сырное ассорти",
      "description": "Сырное ассорти - это пикантное и сытное блюдо, которое состоит из различных сортов сыра, сыровяленых и мягких сыров Ассорти обычно представляет собой разноцветные и разнообразные кусочки сыров, разложенные на тарелки. В состав ассорти входят  такие сыры, как чеддер,Дор Блю сулугуни, пармезан,и Тильзитский сыр. Каждый сыр имеет свой характерный вкус и текстуру, что придает ассорти особый колорит и разнообразие. Вместе с разнообразием сыров добавляются различные компоненты, чтобы создать уникальные комбинации вкусов.  Это грецкие орехи,виноград мёд для сладости. Это блюдо идеально подходит для сырных гурманов и любителей разнообразных вкусов. Сырное ассорти - это целый мир сыра, предлагающий разнообразие ароматов и вкусов. Оно является прекрасным способом насладиться различными сортами сыра и создать уютную и кулинарную атмосферу.",
      "ingredients": [
        "Чеддер Тильзитский Пармезан Сулугуни подается медом и орехом"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmbXh9Pc-Ngn/QQ75og6FzVwGDIXor8rWDUSTQimcrWIl/Lpbaey-4VmjH16Y63x2bNm6eXZQWn0VC/F_DEgAwh-_4Dx-9twtNIp0_jl9Di5-ZL/gstpzgfoPoVFzE9e-YiwwhWNHUp9X6lW/yVv3xjYILho.jpg",
      "price": 850
    },
    {
      "id": 54,
      "name": "Капрезе с томатами",
      "description": "...Капрезе с томатами - это классическое итальянское блюдо, которое известно своей простотой и свежестью. Оно состоит всего из нескольких ключевых ингредиентов, таких как спелые помидоры, моцарелла и свежий базилик. Для приготовления капрезе томаты нарезаются на тонкие круги  как и моцарелла. -  Эти ингредиенты выкладываются в слои, чередуя томаты и моцареллу. А так же с верху поливается соус песто который  придает блюду приятный зеленый оттенок и насыщенный вкус. Капрезе с томатами  является отличным выбором для любителей свежих и нежных вкусов, а также тех, кто ценит простоту и качественные ингредиенты.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOgiGgsh-opCY/B97JRRFQJW00NvldTevsfeMEH08uqt40/YF88m_IVrOmbyA4FrszhMJow4ywBllHJ/lV_WUvMxZWuswamK2Sf_zNRYHfKtTblj/bJylHB0zVHuH9mivmhJBy4H78bTY_5BN/2bweSy_fP7Y.jpg",
      "price": 560
    },
    {
      "id": 55,
      "name": "Овощное ассорти",
      "ingredients": [
        "перец Калифорния, помидоры, огурцы, зелёный лук,сыр сулугуни,листья салата. Каждый из них обладает своим неповторимым вкусом и питательными веществами, что делает ассорти не только вкусным, но и полезным для организма."
      ],
      "description": " Овощное ассорти - это свежее сочетание разнообразных овощей, которые представлены в виде цветных ломтиков. Оно отличается яркими и сочными цветами, а также разнообразными текстурами, что делает его привлекательным и аппетитным.",
      "description2":' Оно также является низкокалорийным и обогащает рацион пищей, особенно для тех, кто заботится о своей фигуре или соблюдает диету. В целом, овощное ассорти - это свежее, цветное и аппетитное ',
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOguJjQ-mgRwr/ZuVP4uGL6Hy86-yr54g0HUYzyYsEV90R/XyDFpWkPu8vvvJF7sqmhtpo59ynmW8BD/eB75vEI9UBYY1_pG37DkPJLlpbN9XPwg/6xHLD9eTDHQTaAaWtnVw0A4kD-wm04S_/aI6xfwe6tFw.jpg",
      "price": 470
    },
    {
      "id": 56,
      "name": "Ассорти соленья ",
      "ingredients": [
        "Маринованные огурцы, грибы, капуста и черри, кимчи салат, патиссоны листья салата"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOq5Fa_4ZNAJl/aBO-eE8eWqwXrv0Sx6LV0xev9Aifhdza/p0wDXb-groq3O4bsKGVZ56rbF-jhpK0B/5M5aT6dyWk5tYXvnKmm8ccnnEaiofhBt/ql5jEwYskg9wIVvMHstTe3fekgT2v9bP/0AX-TXR2LRE.jpg",
      "price": 490
    },
    {
      "id": 57,
      "name": "Селедка с картофелем",
      "description": "Селедка с картофелем - это традиционное и популярное блюдо, состоящее из слоев слабосоленой селедки и картофеля,  Оно обладает ярким и насыщенным вкусом, а также сочетает в себе белокрылую рыбу и питательный картофель. В этом блюде слабосоленая селедка является главным ингредиентом. Она придает блюду свою характерную солоноватую и нежную текстуру. Картофель, в свою очередь, добавляет гармоничный вкус и приятную мягкость к блюду. Слои селедки и картофеля создают интересный визуальный эффект и добавляют разнообразие в текстуре. В целом, селедка с картофелем - это вкусное и питательное блюдо, которое сочетает в себе слабосоленую рыбу и мягкий картофель. Оно является отличным выбором для любителей морепродуктов и тех, кто хочет насладиться богатым и насыщенным вкусом в сочетании с питательностью.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOr0bkL_ekN32/jI_BBPfwtc8Mqo1yC17HHLlti2lkfcOO/kUfHMW0LpJYhRhhN45D-Xe5iibdyzMTQ/b7OmDujwJvcuYHmf6490jMz5XR8NGr9R/97agnkJyAOSxDJlFk7jHASAfobXhDZ8G/AYeOUAxtM3c.jpg",
      "price": 480
    },
    {
      "id": 58,
      "name": "Наггетсы",
      "description": "Наггетсы - это кусочки  куриного мяса покрытые панировкой и обжаренные до золотистой корочки. Они обладают сочным внутренним мясистым слоем и хрустящей панировкой, что делает их вкусным и аппетитным перекусом. В целом, наггетсы - это вкусный и популярный перекус, который сочетает в себе сочное мясо и хрустящую панировку.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlH2haT1LDUP/LKX-uBUG_gwxy6gKF41798pcvdWK2Agf/2HKuTQsZ6azKswpynn4ZNu05MzJ1Jg0c/jD2XNsEBs5pd1tNGaL5ybTEJMN-eo5rz/AKAmvrPMs9ulPPZKumAFCLxEsBSTOVIc/gSkaUJADRZM.jpgg",
      "weight": "230",
      "price": 330
    },
    {
      "id": 59,
      "name": "Креветки васаби",
      "description": "Креветки васаби - это блюдо, которое состоит из свежих креветок, обжаренных в понировке и подаются с соусом васаби. Оно отличается остротой, ароматом и неповторимым вкусом, которые сочетаются воедино.      Обжаренные креветки становятся хрустящими и ароматными,сохранят свою сочность и естественный вкус. В целом, креветки васаби - это блюдо, которое объединяет свежие креветки и пикантный соус васаби. Они отличаются ярким вкусом, острым ароматом и привлекательным внешним видом. Они являются отличным выбором для любителей морепродуктов и тех, кто хочет насладиться острым и аппетитным блюдом.",
      "description2": "Креветки васаби - это блюдо, которое состоит из свежих креветок, обжаренных в понировке и подаются с соусом васаби. Оно отличается остротой, ароматом и неповторимым вкусом, которые сочетаются воедино. Обжаренные креветки становятся хрустящими и ароматными,сохранят свою сочность и естественный вкус. В целом, креветки васаби - это блюдо, которое объединяет свежие креветки и пикантный соус васаби. Они отличаются ярким вкусом, острым ароматом и привлекательным внешним видом. Они являются отличным выбором для любителей морепродуктов и тех, кто хочет насладиться острым и аппетитным блюдом.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOkXLAs7VhVae/tpG8dTtJB4uBqzAnpSmBGFTTG4xQKK4O/NNcSPBFRlj9i9BhXw2hnTilW5UZDsOBi/Zv70v93I-6vxr3ogSqdyES2_hG71HKZQ/CeInwskmmQsjs18Po-3tAJUpLqtt3VR8/xuKFHqVa7RQ.jpg",
      "price": 780
    },
    {
      "id": 510,
      "name": "Гренки",
      "description": "Гренки — это готовка из пшеничного Бородинского хлеба, которая подается как закуска или приправа к супу. Гренки  нарезаются на ломтики, которые затем обжариваются на растительном масле   до золотистого цвета.  Заправляются чесночным маслом  и зеленью укропом. Они идеально подходят для добавления текстуры и хрустящего элемента к различным блюдам.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOnVR6muewEXU/NiqiCXTI9zEFVe4ov0dLgDE4dawOGS2s/iDjeh4L4jq_vGNu7OSPZaJqnLNdyLnxF/B0mdOBd-fZxiYKUn8vcadalOHPXYYoUI/TUOf8bkeLcdQwkCR9n_X34yDDsA1kJRW/03JYW1Vwu7M.jpg",
      "price": 90
    },
    {
      "id": 511,
      "name": "Кесадилья с курицей",
      "description": "Кесадилья с курицей — это блюдо из мексиканской кухни, состоящее из двух тонких тортильяс, между которыми находится начинка с куриного бедра, шампиньонов,сыр Тильзитский и сливки. Кесадилья готовится на гриле, чтобы тортилья стала хрустящей снаружи, а начинка с курицей и сыром стала таящей и ароматной внутри. Подаётся с острым перцем халапенью и зеленью петрушка.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOuKVp7V2-qiW/Zt2g7j56-80lbUIwNJS8fhds1H298feZ/v6J8AhJCskWnCcFQSy87F_MkRASOz2QD/0Aa_yEAr3-WC7d8b-x30ECwa2O25kr5D/euXW8Z7QmKsHCnRDAPZAD7Eig5tTlaOh/JVKYvncyvV0.jpg",
      "price": 560
    }
  ],
  STREETFOOD: [
    {
      "category": "STREET FOOD",
      "id": 61,
      "name": "Симит с курицей",
      "description": "Хрустящий симит с куриной грудкой, овощами и авторским соусом ремулат",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOs-ekcwcXRBz/ihwGoAPpTtdKC_-BZ3QFjmaNmW3aq_8Z/F_TSKUoRJhqMbUis3uWw6zRY9xdArQWl/69AWkhyB3RVVEr_ny1kHVTFfID7rDM5k/LyfeqMDEDggfDb4up-Ki7ZGEhAV1sGxF/R5oRf70vnlM.jpg",
      "price": 320
    },
    {
      "id": 62,
      "name": "Симит с бонфиле",
      "description": "Хрустящий симит с Бон-филе, овощами и авторским соусом ремулат",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOu086Hx0uK6y/6QdYnYpwv_BiAl_6LqBy156cyIUJFi-f/g3IC1Ik8Bf3WredwwgqbxCtPUb8u8rYm/KL_6HL21mBSl3Fa3LpyuVFRhDtG4eZdT/1xnF84Yq1rqNQvCCNadueOkXcl9gDtO5/PUJ2iDW-QOc.jpg",
      "price": 380
    },
    {
      "id": 63,
      "name": "Бургер карри",
      "description": "Бургер с сочной котлетой из говядины  сыром чеддер Состав Пшеничная булка, Говяжьи котлеты, Сыр чеддер, лук фри, айсберг, Картофель фри, Кетчуп, Наш фирменный карри соус",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOravaLFnxlV9/_r4Owrw6EYKLh6ZgIBMLXhKRU2E7ghHV/tOB_SVfOqPV3Wp3nPUQnX6lW3bgeEFUC/Hn51-_fZw80njvjjjnfFUHB0SHRNTL2R/mHGVfqnJCeOkxnvbNuECNKfgFWAL8HKY/N4N2VG8vmYE.jpg",
      "price": 480
    },
    {
      "id": 64,
      "name": "Фирменный  облачный бургер",
      "description": "Облачный бургер с сочной котлетой из говядины и сыром чеддер Состав Пшеничная булка, Говяжьи котлеты, Сыр чеддер, Карамелизированный лук, Картофель фри, Кетчуп, Наш фирменный облачный соус",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOg0-301qKUlJ/Ty1nQNASHBUphYymbLjPwUiPNBirGtgj/aq-Zb7f-iEx6kfbZHB5X65YMi80f6khs/HZM3TMTMe3ge_wf8O588l3pvxT2WMfcP/gmXuWwKcx_uNNR5vajw1teKG4Qzp50zB/S0TOUzdpDRY.jpg",
      "price": 480
    },
    {
      "id": 65,
      "name": "Чикен бургер",
      "description": "Бургер из самой нежной части курицы обжаренный в панировке с овощами",
      "photo": "https://img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z26fMqG75sU4wx1RPF5CPFO3/8vD4eh9J9SgTeYiHgPp0FRPbQPjfZWa2/ep_aM1Q1VsK6eK_3iGcZN4FXbl-kokav/k1-OY6OgM6k6Ec3fXtSLeAEN88z0xa2y/bJxd-maE9JMOZJHbVxdZ4v3JUEG57l3Y/h1aaosDvTL_Makc8D8UqkhgpiZ2EZQCZ/rhxnK_BVu_iHZpHXyCOn8mknC20XIJ6i/43i3IqtQ0jMWXNLPagFWgmP8h7ngcgWs/ovYvZMAAmD7wwT18doHinO1XcH4Naq60/ptvPUPv34mlShSg7oScdpCnNEL1hneJ3/P4vZ8KOLbQ6uHu1RZzK8uKUk0TrkZCu2/Gc6H7z-WhG1VD7FgS1MFkeSgVLuELm-K/r6Ec9qL3JtdCMlbGCn_t1ZkRcuOfxuYu/zskIm1A9_0K533UcV8VgBhM4jTXdVF8m/v8HgE0KVIYM.jpg",
      "price": 480
    },
    {
      "id": 66,
      "name": "Бургер с горчичным соусом ",
      "description": "Бургер с сочной котлетой из говядины  сыром чеддер Состав Пшеничная булка, Говяжьи котлеты, Сыр чеддер, помидор, айсберг, Картофель фри, Кетчуп, Наш фирменный  соус с добавлением горчицы",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOuGnmn-Crwop/cDeDGa3Z23jHERWEDBffTsclXlwq4Aje/XC9sTWtAMmEfyMQaitALanpzQrstkLRB/_Z_lzKRtz2OlwjRpm9fhtV-G1v3Nm90O/7aWlNivYh49AoLEHN0gvqObqv-5ip9nv/yUbe5yW0Gho.jpg",
      "price": 480
    },
    {
      "id": 67,
      "name": "Курица кисло-сладком",
      "description": "Жареные бедра курицы в кляре с кисло сладком соусе",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOkXLAs7VhVae/tpG8dTtJB4vqAdsJEUUz65-2WZlFx976/7mfDv1IFC2WLyaRSdgC3G57B-EJfmleL/IZHBjhqhrZGbK8rYoNBiZFRBE9Nw4YZ3/uAYG_SmazU-ESsxW8XMkE3O4sgrsmHLv/KkBuDRCqgs0.jpg",
      "price": 420
    }
  ],
  bowls: [
    {
      "category": "БОУЛЫ",
      "id": 71,
      "name": "Поке с курицей",
      "description": " Поке с курицей - это блюдо гавайской кухни, состоящее из свежих ингредиентов, таких как курица, овощи, соусы и рис. Главной особенностью поке является то, что все ингредиенты нарезаются и смешиваются в одной миске, что создает яркий и насыщенный вкус. Все ингредиенты аккуратно смешиваются в одной миске и подаются на стол в виде красивого и аппетитного слоя. Поке с курицей способно удовлетворить любителей разнообразных текстур и вкусовых сочетаний. Оно сочетает в себе хрустящую курицу, мягкий рис, свежие овощи и пикантный соус, что делает его привлекательным и насыщенным блюдом. Поке с курицей отличается своей легкостью и питательностью, а также яркими красками и натуральными ароматами. Он подходит для тех, кто стремится сохранить форму и заботится о здоровом питании, так как включает в себя свежие овощи и хорошо приготовленную курицу. В целом, поке с курицей представляет собой приятное и вкусное блюдо, которое отлично подходит для легкого обеда или ужина. Оно позволяет насладиться гавайскими традициями и разнообразить свой рацион.",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmDV-Y0kpS_k/g292-a7Z0l-wdhvPjTmP5k1uPbHt5p-g/P1ZSRhKXklyJFnHecXPjQ4nrV-l29lLg/vraJvD4Zowq-dZxvdjH2PAIthxBQ-NwW/9zbxUuMJlfUmOAu758M5hc_NKLmcFlCe/BbMcNJf-ts4.jpg",
      "price": 460
    },
    {
      "id": 72,
      "name": "Поке веган",
      "description": "Японский рис, свежий авокадо нарезанный кубиками, консервированная кукуруза, пак чой  обжаренный на гриле, обжаренные на гриле листья салата айсберг, томаты черри и свежие огурцы. Подается с соусом Ко Шо ( классический ореховый соус )",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOvpnLt2h81D2/RWOSCdS3RZ6lx_0PZh_m1IddsUkLxVzy/HK7Wy550NyD_fyPrz3AYFJM4cBKnz1Fo/p97s3LwSarqG2zruj1K8rHdXFfr1Nmna/IyZxCfdZn4xvNSEHOb5vjheqfuxeAchI/C0gxf55sSyI.jpg",
      "price": 420
    },
    {
      "id": 73,
      "name": "Поке с лососем",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOskSTAG4h-nn/OTnv_KbsPxEiCl9vw9kLd45vtowuZi1K/Snl4TqLNiMd3YbwynnKR-cish1erxqqA/U3SxfkgNbAKB8QHv1uVTPbTj-xnMRh3_/6y4uK-qnnDhTUzlBKcE80cj-FtbXtsVM/tA0mTCIqLPw.jpg",
      "description": "Поке с лососем - это традиционное гавайское блюдо, которое состоит из свежего сырого слабосолённого лосося. Лосось нарезается на небольшие кубики и смешивается со шпинатом, брокколи, айсбергом,черри,кукуруза,эдеми и рис.  Блюдо отличается свежим и нежным вкусом лосося, который сочетается с приятной горчинкой маринада и текстурой риса. Поке с лососем идеально подходит для любителей суши и сашими, а также для тех, кто предпочитает легкую и здоровую пищу.",
      "weight": 480
    }
  ],
  rolls: [
    {
      "category": "РОЛЛЫ",
      "id": 81,
      "name": "ролл без риса",
      "description": "Нори, Рис, Творожный сыр, Огурцы, Лосось, Имбирь маринованный, Васаби",
      "photo": "https://i.ibb.co/WypX0wF/roll1.jpg",
      "price": 470
    },
    {
      "id": 82,
      "name": "Калифорния",
      "description": "Нори, Рис, Крабовая  начинка , Огурцы, Икра массаго, Имбирь маринованный, Васаби",
      "photo": "https://i.ibb.co/QXyVDbG/roll2.jpg",
      "price": 460
    },
    {
      "id": 83,
      "name": "Горячий роллы",
      "description":"Горячий ролл - это вариант суши, который отличается от классических суши тем, что он приготавливается с применением тепла. В начинку идут нори, лосось, овощи и сыр. Роллы связываются и обжариваются до золотистой корочки, что придает им теплый и хрустящий вкус. Горячие роллы подаются с соевым соусом. Это блюдо предлагает комбинацию мягкого риса, теплой и ароматной начинки, а также хрустящей корочки, что делает его вкусным и удовлетворяющим для любителей суши и роллов.",
      "photo": "https://i.ibb.co/xCr5p9Y/roll3.jpg",
      "price": 8550
    },
    {
      "id": 84,
      "name": "Ролл в темпуре",
      "ingredients": [
        "Нори, Рис, Творожный сыр, Огурцы, Креветки, Кляр, Сухари панка Имбирь маринованный, Васаби"
      ],
      "description":"Ролл в темпуре - это вариант суши, который отличается от классических суши тем, что он приготавливается с применением тепла. В начинку идут нори, креветки, овощи и сыр. Роллы связываются и обжариваются до золотистой корочки, что придает им теплый и хрустящий вкус. Горячие роллы подаются с соевым соусом. Это блюдо предлагает комбинацию мягкого риса, теплой и ароматной начинки, а также хрустящей корочки, что делает его вкусным и удовлетворяющим для любителей суши и роллов.",
      "photo": "https://i.ibb.co/fNf37Cm/roll4.jpg",
      "price": 520
    },
    {
      "id": 85,
      "name": "Ролл фирменный Облако",
      "description": "Японский рис ( заправляется мицуканом ) внутри авокадо, краб, креметто.  подается с 2мя мини суши ( Лосось, Авокадо ) и двумя соусами спайси и ореховый.",
      "photo": "https://i.ibb.co/yk4q3QF/roll5.jpg",
      "price": 590
    },
    {
      "id": 86,
      "name": "Сет 1",
      "ingredients": [
        "Филадельфия, Калифорния, Горячий ролл, Ролл темпера."
      ],
      "photo": "https://i.ibb.co/hgtmFHc/roll6.jpg",
      "price": 1700
    },
    {
      "id": 87,
      "name": "Сет 2",
      "ingredients": [
        "Филадельфия, калифорния, Горячий ролл."
      ],
      "photo": "https://i.ibb.co/Zzv2HVc/roll7.jpg",
      "price": 1500
    }
  ],
  Sets_for_the_company: [
    {
      "category": "Сеты на компанию",
      "id": 91,
      "name": "Мясной сет",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOivAktpktfBS/ex-zAFonnC-rX-DK-rYSzpIU-mODdc3B/PCXFdZi0F1czgma5C7NjxcWWIhbDibxj/LaQQ3b4UIulpljXRSlCH_wdwKRbS6zij/I6DMIM9Cyyuy8m_5c2a6v74nGC6aJfEr/OBLyOehl9T4.jpg",
      "price": 3600,
      "ingredients": [
        "Рибай-стейк Бон-филе Куриная грудка Куриное бедро Картофель по-домашнему Жареные вешенки Свежие томаты Сосиски говяжьи Сочные жареные кабачки"
      ]
    },
    {
      "id": 92,
      "name": "Пивной сет",
      "photo": "https://i.ibb.co/XLJjpc4/lunch2.jpg",
      "ingredients": "Кукурузные чипсы  Картофель фри Наггетсы Луковые кольца Колбаски Чечел И наши фирменные соуса (сырный соус, свит чили соус и кетчуп)",
      "price": 1700
    },
    {
      "id": 93,
      "name": "Колбасный сет",
      "description": "Ассорти из сборных, вкусных колбас с картофелем",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOhdXXPrqJoyy/lktGBvyrWGBHaBVEmYoZdAhuHO5Hn4So/PkzhQGKB0THYsuXIiDrCQc8UlzXuKLf6/7n6eB72dwokVK-zskIKAbkyUyNU_Aa_5/tVZ_2AJ7JWTQtOSiH1fICEZwniCmO4Nr/djh2fm48sv4.jpg",
      "price": 1900
    },
    {
      "id": 94,
      "name": "Мясное ассорти",
      "ingredients": [
        "Пастурма  Рулет куриный Рулет утиный  бекон говяжий. Говяжий язык  Руккола      "
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlH2haT1LDUP/LKX-uBUG_gxx-B9q43ZFaXJjcCnsQfz1/NTDxR8lNm1tXsLqxKOR-LXMrw6hDiKYW/ydDmOtVkmAxf72GC9fXjhJGnadJDrSLZ/My1_Xa77TXer_vYcam-ONaphfimxijcW/OqzunB4PRJc.jpg",
      "price": 940
    }
  ],
  Side_dishes: [
    {
      "category": "Гарниры",
      "id": 101,
      "name": "Гречка с грибами",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmyZTlFpk468/lPltS__L13aespMPOn8KE1CgSNVuJ-0f/pTZquhRd2iH_1fvXhXxw3i7s07U8yYY1/bhAUgJb4XeN5xgEWX06rDajycaKzH2W_/498mXPp_Aqhsl0ev2JXcmA03478Wjces/6ByAVEuH1G4.jpg",
      "price": 170
    },
    {
      "id": 102,
      "name": "Картофельное пюре",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmDV-Y0kpS_k/g292-a7Z0l-Fh3Opi_3-SV3MFBEznVmM/Q_08fa7TosWFyG35cq0-qn3gu05fTcRR/kEPqIrBiJ_d7eevUlW_5ijNFMTPKU4Du/y4ThpmWOUfR5o1Mw_D7p3BK3PpOrVmF9/_a3psnyRAn8.jpg",
      "price": 170
    },
    {
      "id": 103,
      "name": "Овощи на гриле",
      "ingredients": [
        "Кабачки",
        "Баклажаны",
        "Помидоры",
        "Грибы шампиньон",
        "Лук репчатый",
        "Крем- бальзамик",
        "Болгарский перец"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOnDUthuuERyP/ZgLWrEG54m-ffPpqyIpik81G0hrdSm4m/KfcxH_IYHyS2k49FMSqYj2MoXHbvWaMf/lJ0Qok2MVj64BkkYWQsajZOVEGaiwDc6/2dg8qL0CxkQShGjTEU8c398kqj38bU4f/ObZCnUM5YZc.jpg",
      "price": 220
    },
    {
      "id": 104,
      "name": "Фри",
      "description": "Хрустящий картофель фри, подается с кетчупом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOhNm03cjn2Uk/fpcx5hhN_CvDxsrNACNSf0l0qTdc9X3K/XD3g1Yaof1S3RduLXCvL_R0KS9U8Z_0c/fxf7qmriAqwMg4ldgtQUhFxcdBWAUL7L/pAIct244ay8AJWjbk1LQqjdL6M8t5LwC/4hSsrOkHb_8.jpg",
      "price": 170
    },
    {
      "id": 105,
      "name": "Картофель по деревенски",
      "ingredients": [
        "Картофель запеченный",
        "Грибы вешенки",
        "Зелень"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlqyB3CAga1f/Fo_gTq6VZN3eFYHEiTrLBCN2UChEO37x/e4Um0sVRJYRhteals221R3hEfYrc5Pww/JEebK5U0D2GdregiKzwovMP1gNjd19cY/tZLA2psQEOOWD37srjt2nkCny7TDI7ro/dkDZp0m0gzs.jpg",
      "price": 170
    },
    {
      "id": 106,
      "name": "Рис",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOivAktpktfBS/ex-zAFonnC_bda6zF2tKtA1BEgZp6qe1/ShlpI32o1v3TFJNJ6SNo51I0YCtJ-TvK/TAqgTrqzjNF-QlBBt3bQvSmv25cuIZ4e/GfuKJuEk1q73YBxGRKiCu-fWRT7MBwzG/kje_5eOESBM.jpg",
      "price": 170
    },
    {
      "id": 107,
      "name": "Рис яйцом",
      "photo": "",
      "price": 200,
      "description": "Рис с яйцом заправляется в соевым соусом и чесноком"
    }
  ],
  Dessert: [
    {
      "category": "Десерты",
      "id": 111,
      "name": "Напалеон",
      "description": "Классический десерт с слоеным тестом и заварным кремом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOmDV-Y0kpS_k/g292-a7Z0l8VxPdr25zi2nVoC1nAwAZh/xxLvmuSLPlqbLLEcExiByw_kd8R0zRee/5qcTB-5-W2W6ACYrCi_LPgfpNfqAQR4x/1-g-jInJG9l7jPRwkWRZqkUF0y1wLkRp/f8v-X4XXivQ.jpg",
      "price": 360
    },
    {
      "id": 112,
      "name": "Чизкейк классический",
      "description": "Классический творожный чизкейк, с клубничным топингом",
      "photo": "",
      "price": 380
    },
    {
      "id": 113,
      "name": "Тирамису",
      "description": "Изысканный, воздушный, итальянский десерт который готовится на основе сыра маскарпоне",
      "ingredients": [
        "Сыр маскарпоне Кофе эспрессо Куриные яйца Сахар Печенье савоярди"
      ],
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOjjwoEVDtpB7/3C05cGV88q2pwYQ-7sZkGgpbqJmIobmY/QbenPs9vGoPlaGfLM-10jsrN_8uInhtD/v8VkXJE68fwUBJ2DgQp_ekPkp9vGik-W/t_vAnlQPEPk3QwVu5aaKQb4odcftEDKX/8yBr9IR53jU.jpg",
      "price": 380
    },
    {
      "id": 114,
      "name": "Банановый кейк",
      "description": " Кейк из банана и изюма подается шариком вкусного мороженого",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOqHPJSWXPe2C/dsG7oMxGEwffKLqOTuuNiyEqOYHVs-S7/CBl7lQICsOXpfop_Xnj6ecQzU9aYu-5k/vQ834Ds0TN6XId6PZn735zpOeQYGA0Vc/dtda8lZ6YVyY_fc7iroSUvc8P9ofSHH6/aNOFKODk_Bc.jpg",
      "price": 360
    },
    {
      "id": 115,
      "name": "Медовый торт",
      "description": "Классический мягкий торт медовик ароматными коржами",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOqpJDehH1ctx/0BNlHppdwo0qO4_8bOQw60FrrSr_FtIm/rHCHT51i5X_DJafnZf0zMRMtVR10YfIt/Vo4R379mI6g6_py3FJbdah1asgqeZ8mg/tPxn7cUz4dO2oB8twpP8EuvGmdlgtpJt/lWtIfCMIl8s.jpg",
      "weight": "180",
      "price": 320
    },
    {
      "id": 116,
      "name": "Мороженое в ассортименте",
      "ingredients": [
        "Бабыл гам, клубничный сорбет, сливочно клубничный, пломбир, фисташковый, шоколадный, арахисовый."
      ],
      "photo": "https://img-s.wfolio.com/x/KfN2JhbB89-m6UeUSQ-43fW6LwNVx07A/uFZCjLs3Z26fMqG75sU4wx1RPF5CPFO3/8vD4eh9J9SgTeYiHgPp0FRPbQPjfZWa2/ep_aM1Q1VsK6eK_3iGcZN4FXbl-kokav/k1-OY6OgM6k6Ec3fXtSLeAEN88z0xa2y/bJxd-maE9JMOZJHbVxdZ4v3JUEG57l3Y/h1aaosDvTL_Makc8D8UqkhgpiZ2EZQCZ/rhxnK_BVu_iHZpHXyCOn8mknC20XIJ6i/43i3IqtQ0jMWXNLPagFWgmP8h7ngcgWs/ovYvZMAAmD7wwT18doHinO1XcH4Naq60/ptvPUPv34mlShSg7oScdpDD0BiFI9WX4/Bt58lzztFgb6EJL6kzTvVHhmX0vpkkKw/RgkT8wcfz5qm3IxxVdAg8PNXtKtN26fo/IA8WCU3Ql78577CUJCaHUS58O4lK2Lnl/hubLXuePR_naSmz6wQ6qFt00mM6txNBt/lgKQ7p3D6WQ.jpg",
      "price": 160
    },
    {
      "id": 117,
      "name": "Фруктовая тарелки",
      "description": "Ассорти из свежих сезонных фруктов",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOgqBT9_LLMph/v7kOBO3u0aCL8TjLmnhWFcVEkdlALBdh/UeN-QBAGILRnoSNrOigwuVMKQI4ipbFe/-ogDPjz-jSP-5nXVQXy1F9kjFmrHd1Ls/tlgbXcJh9vCaj13MLhgAu-BU3qusS4u6/3_m-2v-Bfek.jpg",
      "price": 980
    }
  ],
  Bread: [
    {
      "category": "Хлеб",
      "id": 121,
      "name": "Хлебная корзина",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlqyB3CAga1f/Fo_gTq6VZN30Rqlp6mXpWBk6Ayjdh461/rDygFCv-c3y2rntbNpRONHpOILPbqeRG/1JnkePIGEwtWV16eKbgFkrlS8d-bccDg/mfDiQpTzdvMPqbPVNqANaokjtQHHOGzU/mAeIJxyg54U.jpg",
      "price": 140
    },
    {
      "id": 122,
      "name": "Хлеб порционный",
      "photo": "",
      "price": 140
    }
  ],
  Breakfast: [
    {
      "category": "Завтрак",
      "id": 121,
      "name": "Сырники с джемом",
      "photo": "https://img-s.wfolio.com/x/Sjpgrm2v20FR6Cth5viRkzL_0dyRc0yk/9ZAr53SKb35nBh1YaVCzIaljY3WEQSv9/WI7iF4WVvJ-8NuQJK1ea7F-ihg_K1l4h/Q8TYiFaUo7FsvKrGvxYPyMRV1nsQcvGe/nTBoGrJCYbas13bibvNPHxaKZHXI4gKm/BHsrhZ3uqOGpOysVEIF3g7dQuqvFE_Z4/TxpirQsh5YUZZmXoUEDVaAeeDVodKD_m/K-IE-5YjvI1qdZbELYoLJP-YGdShGMfz/TkEAWTzqaYnJpDsjfgDl0FMx178uQQgv/eX85dgRFrKzW-xzRtbqqYCEvV13gLPdn/_ViLJwhtt7ALzprokOylOlYRG71buOEy/8QUiJLBW97_HUGsQa9G5Zz_EQg8hrolW/tW2H5yM5ds4jXv2ivlC3yfntzLFO6bTa/kW9P-mLRxDe_W8xcNItTng9vfvYrC2wv/FExGS16C_UAqvfHc52qBHtEDyTeMeHSs/XpnvIE4NApo.jpg",
      "description": "Творожный сырник – традиционное, блюдо, приготовленное из творога. сырник круглой формы, в высоту имеет 1,5-2 см, золотистого цвета, с приятным вкусом и нежным творожным ароматом.",
      "price": 0
    }
  ],
  }

  const { selectedRoute } = useRoute();
  const bakedRolls = data[selectedRoute];
  const [loading, setLoading] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

  console.log(bakedRolls);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsNavFixed(scrollPosition > 250);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  return (
     <div className="item-menu" style={{marginTop: isNavFixed?"75px":null}}>
        {loading ? <Loader /> : <Item items={bakedRolls} />}
     </div>
  );
}

export default Вynamicpage;