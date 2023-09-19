const getAge = async (name: string) => {
    const result = await fetch(`https://api.agify.io/?name=${name}`);
    return result.json();
}

const getGender = async (name: string) => {
    const result = await fetch(`https://api.genderize.io/?name=${name}`);
    return result.json();
}

const getCountry = async (name: string) => {
    const result = await fetch(`https://api.nationalize.io/?name=${name}`);
    return result.json();
}

interface Params {
    params: {
        name: string
    }
}

export default async function Information({params}: Params) {

    const [ageData, genderData, countryData] = await Promise.all([
        getAge(params.name), getGender(params.name), getCountry(params.name)
    ])


    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Personal Information</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Name: {params.name}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Age: {ageData.age}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Gender: {genderData.gender}</div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black">Country: {countryData.country[0].country_id}</div>
            </div>

        </div>
    )
}
