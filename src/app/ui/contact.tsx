import Link from "next/link";

export default function Contact() {
    return (
        <div className='w-full min-h-screen bg-base-200 flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[90%] sm:max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center text-center'>
                    <h1 className='text-4xl sm:text-5xl font-bold'>Contact</h1>
                    <p className='py-2 sm:py-4'>Send me a message</p>
                    <Link href="https://www.linkedin.com/in/yassine-sabri-741345247/" className="btn btn-primary mt-4 lg:mt-0" target="_blank">
                        LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    );
}
