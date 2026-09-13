"use client";

import { useEffect, useState } from "react";
import {
  Bike,
  CheckCircle2,
  Clock3,
  DoorClosed,
  DoorOpen,
  Hand,
  MousePointerClick,
  Package,
  Smartphone,
  Truck,
  UserRound,
  UtensilsCrossed,
} from "lucide-react";

import styles from "./DeliveryAd.module.css";

const AD_DURATION = 10000;
const LOADING_DURATION = 650;

export default function DeliveryAd() {
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsLoading(false);
      setIsRunning(true);
      setAnimationKey((currentKey) => currentKey + 1);
    }, LOADING_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [isLoading]);

  const handleRunAd = () => {
    if (isLoading) {
      return;
    }

    setIsRunning(false);
    setIsLoading(true);
  };

  const handleAnimationEnd = () => {
    if (isRunning) {
      setAnimationKey((currentKey) => currentKey + 1);
    }
  };

  return (
    <main className={styles.page}>
      <section className={styles.wrapper}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>DELIVERY EXPERIENCE</span>

          <h1 className={styles.title}>
            Fast delivery.
            <span> Every time.</span>
          </h1>

          <p className={styles.description}>
            Watch your order move from checkout to your doorstep.
          </p>
        </div>

        <button
          type="button"
          className={`${styles.runButton} ${
            isLoading ? styles.runButtonLoading : ""
          }`}
          onClick={handleRunAd}
          disabled={isLoading}
          aria-label={isLoading ? "Loading advertisement" : "Run advertisement"}
        >
          {isLoading ? (
            <>
              <span className={styles.buttonSpinner} />
              <span>Loading Ad...</span>
            </>
          ) : (
            <>
              <span>Run Ad...</span>
              <MousePointerClick size={18} strokeWidth={2.4} />
            </>
          )}
        </button>

        <div
          key={animationKey}
          className={`${styles.adCard} ${
            isRunning ? styles.adRunning : styles.adIdle
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className={styles.adGlow} />

          <div className={styles.adHeader}>
            <div className={styles.brand}>
              <div className={styles.brandIcon}>
                <Truck size={19} strokeWidth={2.4} />
              </div>

              <div>
                <strong>QuickDrop</strong>
                <span>Delivery service</span>
              </div>
            </div>

            <div className={styles.liveStatus}>
              <span className={styles.liveDot} />
              LIVE DELIVERY
            </div>
          </div>

          <div className={styles.animationStage}>
            {/* Scene 1 — Order placed */}
            <div className={`${styles.scene} ${styles.sceneOrder}`}>
              <div className={styles.sceneIconGroup}>
                <div className={styles.phoneIcon}>
                  <Smartphone size={78} strokeWidth={1.65} />
                  <span className={styles.phoneScreen}>
                    <span />
                    <span />
                    <span />
                  </span>
                </div>

                <div className={styles.tapRipple}>
                  <MousePointerClick size={27} />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>01</span>
                <h2>Order placed</h2>
                <p>Your order is on its way to the kitchen.</p>
              </div>
            </div>

            {/* Scene 2 — Burger assembly */}
            <div className={`${styles.scene} ${styles.sceneBurger}`}>
              <div className={styles.foodVisual}>
                <div className={styles.burger}>
                  <div className={styles.burgerTop}>
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className={styles.burgerLayer} />
                  <div className={styles.burgerCheese} />
                  <div className={styles.burgerPatty} />
                  <div className={styles.burgerLayer} />

                  <div className={styles.burgerBottom} />
                </div>

                <div className={styles.handPress}>
                  <Hand size={58} strokeWidth={1.7} />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>02</span>
                <h2>Freshly prepared</h2>
                <p>Carefully packed and ready for delivery.</p>
              </div>
            </div>

            {/* Scene 3 — Packing */}
            <div className={`${styles.scene} ${styles.scenePacking}`}>
              <div className={styles.packageVisual}>
                <div className={styles.packageBox}>
                  <div className={styles.packageFront}>
                    <Package size={66} strokeWidth={1.45} />
                  </div>

                  <div className={styles.packageFlapLeft} />
                  <div className={styles.packageFlapRight} />
                </div>

                <div className={styles.packageCheck}>
                  <CheckCircle2 size={26} />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>03</span>
                <h2>Packed with care</h2>
                <p>Sealed, secured and ready to go.</p>
              </div>
            </div>

            {/* Scene 4 — Courier en route */}
            <div className={`${styles.scene} ${styles.sceneCourier}`}>
              <div className={styles.routeVisual}>
                <div className={styles.routeLine}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.courierVehicle}>
                  <Bike size={74} strokeWidth={1.5} />
                </div>

                <div className={styles.routePin}>
                  <span />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>04</span>
                <h2>Courier en route</h2>
                <p>
                  <Clock3 size={16} />
                  Live tracking in progress
                </p>
              </div>

              <div className={styles.trackingClock}>
                <Clock3 size={31} strokeWidth={1.8} />
              </div>
            </div>

            {/* Scene 5 — Arrival & knock */}
            <div className={`${styles.scene} ${styles.sceneArrival}`}>
              <div className={styles.doorVisual}>
                <div className={styles.doorFrame}>
                  <DoorClosed size={108} strokeWidth={1.35} />
                </div>

                <div className={styles.knockingHand}>
                  <Hand size={51} strokeWidth={1.65} />
                </div>

                <span className={styles.knockOne} />
                <span className={styles.knockTwo} />
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>05</span>
                <h2>Almost there!</h2>
                <p>Your courier has arrived at the door.</p>
              </div>
            </div>

            {/* Scene 6 — Door opens */}
            <div className={`${styles.scene} ${styles.sceneOpen}`}>
              <div className={styles.openDoorVisual}>
                <div className={styles.personBehind}>
                  <UserRound size={65} strokeWidth={1.5} />
                </div>

                <div className={styles.openDoor}>
                  <DoorOpen size={112} strokeWidth={1.3} />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>06</span>
                <h2>At your doorstep</h2>
                <p>Just one step away from delivery.</p>
              </div>
            </div>

            {/* Scene 7 — Delivered */}
            <div className={`${styles.scene} ${styles.sceneDelivered}`}>
              <div className={styles.deliverySuccess}>
                <div className={styles.clockBefore}>
                  <Clock3 size={42} strokeWidth={1.5} />
                </div>

                <div className={styles.successCircle}>
                  <CheckCircle2 size={82} strokeWidth={1.6} />
                </div>
              </div>

              <div className={styles.sceneText}>
                <span className={styles.sceneNumber}>07</span>

                <div className={styles.deliveredBadge}>
                  <CheckCircle2 size={17} />
                  Delivered!
                </div>

                <h2>Right on time.</h2>
                <p>Fast, simple and delivered with care.</p>
              </div>
            </div>

            {/* Idle state */}
            {!isRunning && !isLoading && (
              <div className={styles.idleOverlay}>
                <div className={styles.idleIcon}>
                  <UtensilsCrossed size={37} strokeWidth={1.6} />
                </div>

                <strong>Ready when you are</strong>
                <span>Press “Run Ad...” to start</span>
              </div>
            )}

            {/* Loading state */}
            {isLoading && (
              <div className={styles.loadingOverlay}>
                <div className={styles.loadingRing}>
                  <span />
                </div>

                <strong>Preparing Ad...</strong>
                <span>Starting delivery experience</span>
              </div>
            )}
          </div>

          <div className={styles.progressArea}>
            <div className={styles.progressTrack}>
              <div
                className={`${styles.progressBar} ${
                  isRunning ? styles.progressRunning : ""
                }`}
              />
            </div>

            <div className={styles.progressLabels}>
              <span>ORDER</span>
              <span>PACK</span>
              <span>DELIVER</span>
              <span>DONE</span>
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          Programmed by Xypher Tech Solutions
        </footer>
      </section>
    </main>
  );
}