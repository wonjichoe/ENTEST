import logoWhite from '@assets/images/logo_white.svg'

export function Footer() {
  return (
      <div className="py-12 sm:py-16 md:py-[110px] max-w-[375px] sm:max-w-[810px] lg:max-w-[1440px] mx-auto px-4 sm:px-8 md:px-0">
        <img src={logoWhite} alt="Logo" className="w-40 sm:w-48 md:w-[255px] h-auto" />
        <p className='text-[#f5f5f5] mt-4 sm:mt-6 md:mt-[32px] text-sm sm:text-base'>
          Copyrights 2025.
          <strong>테스트</strong>
          All Rights Reserved
        </p>
      </div>
  )
}