import {Spinner} from "flowbite-react";

export default function Loading() {
  return (
    <div className={'flex h-[400px] justify-center items-center'}>
      <Spinner size={'xl'} className={'text-white'} />
    </div>
  );
}
