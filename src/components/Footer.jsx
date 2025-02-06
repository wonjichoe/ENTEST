import logoWhite from '@assets/images/logo_white.svg'

export function Footer() {
  return (
      <div className="py-[110px] max-w-[1440px] mx-auto ">
        <img src={logoWhite} alt="Logo" width="255" height="67"/>
        <p className='text-[#f5f5f5] mt-[32px]'>
          Copyrights 2025.
          <strong>테스트</strong>
          All Rights Reserved
        </p>
      </div>
  )
}