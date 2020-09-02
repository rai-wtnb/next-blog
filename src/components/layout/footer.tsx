export const Footer = () => {
  return (
    <footer>
      <div>
        <span>
          &#169;
          {`${new Date().getFullYear()} Company Inc. All Rights Reserved`}
        </span>
        <div className='float-right'>
          <a
            href='https://github.com/rai-wtnb'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
