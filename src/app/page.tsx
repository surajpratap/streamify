import CardComponent from "@/app/card-component";

export default function Root() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
      <div className={'grid lg:grid-cols-4 md:grid-cols-3 gap-4 mt-4'}>
        <CardComponent title={'Total Users'} subtitle={'98976'}/>
        <CardComponent title={'Active Users'} subtitle={'9090'}/>
        <CardComponent title={'Total Streams'} subtitle={'989'}/>
        <CardComponent title={'Revenue'} subtitle={'$ 987,010'}/>
        <CardComponent title={'Top Artist'} subtitle={'Jay Z'}/>
      </div>
    </div>
  )
}
