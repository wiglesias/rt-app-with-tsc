import axios from "axios"
import { Sub, SubsResponseFromApi } from "../types"

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = async (): Promise<SubsResponseFromApi> => {
  const response = await axios
  .get('http://localhost:3001/subs');

  return response.data;
}

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map(subFromApi => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description
    } = subFromApi

    return {
      nick,
      subMonths,
      avatar,
      description
    }
  })
}
