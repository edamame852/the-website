import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';
import heroImage from '../../images/header-background.webp';
import { useTranslation } from 'next-i18next';

const Hero: FC = memo(() => {
  const {t}=useTranslation();
  const {actions} = heroData;
  const imageSrc = heroImage;
  const name= t('hero.name');
  const description = (
    <>
      <p/>
      <p className="text-stone-200 sm:text-base lg:text-xl">
      {t('hero.description.entry1')}<strong className="text-stone-50 underline">{t('hero.description.entry2')}</strong>{t('hero.description.entry3')}<strong className="text-stone-100">{t('hero.description.entry4')}</strong>{t('hero.description.entry5')}
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"> */}
      <p className="text-stone-200 sm:text-base lg:text-lg">
      {t('hero.description.entry6')}<strong className="text-stone-100">{t('hero.description.entry7')}</strong>{t('hero.description.entry8')}<strong className="text-stone-100">{t('hero.description.entry9')}</strong>{t('hero.description.entry10')}{' '}
        <strong className="text-stone-100">{t('hero.description.entry11')}</strong>.
      </p>
    </>
  );
  
  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full object-cover"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{name}</h1>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
