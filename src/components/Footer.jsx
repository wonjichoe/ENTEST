import logo from '@assets/images/logo.svg'

export function Footer() {
  return (
      <div className="h-350px max-w-[1440px] mx-auto">
        <img src={logo} alt="Logo" width="137" height="33"/>
        <p>
          Copyrights 2024.
          <strong>테스트</strong>
          All Rights Reserved
        </p>
      </div>
  )
}