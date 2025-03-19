'use client';

import { Button } from '@nextui-org/button';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/modal';
import { Link } from '@nextui-org/link';
import { useEffect, useState } from 'react';
import { SettingsIcon } from './icons';
import { CookieConsentSettings } from './cookie-consent-settings';
import { setGAConsent } from '@/utils/ga';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCookieConsentSettings, setShowCookieConsentSettings] =
    useState(false);

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem('cookie_consent');
    if (!storedCookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAllowCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setGAConsent({
      isAnalytics: true,
      isMarketing: true
    });

    setShowBanner(false);
  };

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setGAConsent({
      isAnalytics: false,
      isMarketing: false
    });
    setShowBanner(false);
  };

  const handleSettings = () => {
    setShowBanner(false);
    setShowCookieConsentSettings(true);
  };

  return (
    <>
      <Modal
        isOpen={showBanner}
        placement='bottom'
        onOpenChange={setShowBanner}
        hideCloseButton
      >
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1'>
            Cookie consent
          </ModalHeader>
          <ModalBody>
            <p>We use cookies on our site.</p>
            <p>
              Read more in our <Link href='/privacy'>privacy policy</Link>.
            </p>
          </ModalBody>
          <ModalFooter className='justify-start'>
            <div className='grow'>
              <Button
                variant='flat'
                startContent={<SettingsIcon />}
                onPress={handleSettings}
              >
                Preferences
              </Button>
            </div>
            <Button
              color='danger'
              variant='light'
              onPress={handleDeclineCookies}
            >
              Decline
            </Button>
            <Button color='primary' onPress={handleAllowCookies}>
              Accept all
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CookieConsentSettings
        showCookieConsentSettings={showCookieConsentSettings}
        setShowCookieConsentSettings={setShowCookieConsentSettings}
      />
    </>
  );
}
