'use client';

import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { Switch } from '@nextui-org/switch';
import { CookieIcon } from './icons';
import { useEffect, useState } from 'react';
import { getGAConsentFromLS, setGAConsent } from '@/utils/ga';

interface CookieConsentSettingsProps {
  showCookieConsentSettings: boolean;
  setShowCookieConsentSettings: (show: boolean) => void;
}

export const CookieConsentSettings = (props: CookieConsentSettingsProps) => {
  const [isAnalyticsSelected, setIsAnalyticsSelected] = useState(true);
  const [isMarketingSelected, setIsMarketingSelected] = useState(true);

  const handleSavePreferences = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setGAConsent({
      isAnalytics: isAnalyticsSelected,
      isMarketing: isMarketingSelected
    });

    props.setShowCookieConsentSettings(false);
  };

  useEffect(() => {
    const { isAnalytics, isMarketing } = getGAConsentFromLS();

    if (isAnalytics !== null) {
      setIsAnalyticsSelected(isAnalytics);
    }
    if (isMarketing !== null) {
      setIsMarketingSelected(isMarketing);
    }
  }, []);

  return (
    <Modal
      isOpen={props.showCookieConsentSettings}
      placement='center'
      className='max-w-lg w-full'
      isDismissable={false}
      isKeyboardDismissDisabled
    >
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1 border-b border-dark-gray'>
          <div className='flex items-center'>
            <CookieIcon className='mr-2' />
            <span className='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
              Cookie-preferences
            </span>
          </div>
          <div className='text-sm text-gray-500 font-normal m-4'>
            Configure cookie settings, or disable/enable all kinds of cookies.
          </div>
        </ModalHeader>
        <ModalBody className='space-y-4 pt-4'>
          <div className='flex justify-between items-start space-y-2'>
            <div>
              <label>Basic-cookies</label>
              <p className='text-dark-gray-500 text-sm'>
                Necessary stuff that needs to be on.
              </p>
            </div>
            <Switch
              className='ml-auto'
              id='essential'
              isDisabled
              defaultSelected
            />
          </div>
          <div className='flex justify-between items-start space-y-2'>
            <div>
              <label>GoogleAnalytics-cookies</label>
              <p className='text-dark-gray-500 text-sm'>
                Some small analytics, to ensure translations and size of machine
                is okay.
              </p>
            </div>
            <Switch
              className='ml-auto'
              id='analytics'
              isSelected={isAnalyticsSelected}
              onValueChange={setIsAnalyticsSelected}
            />
          </div>
          <div className='flex justify-between items-start space-y-2'>
            <div>
              <label>Some Incomerelatedcookies</label>
              <p className='text-dark-gray-500 text-sm'>
                Ads or not ads, at least some relevanse.
              </p>
            </div>
            <Switch
              className='ml-auto'
              id='marketing'
              isSelected={isMarketingSelected}
              onValueChange={setIsMarketingSelected}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            className='ml-auto'
            type='submit'
            onPress={handleSavePreferences}
          >
            Save Preferences
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
