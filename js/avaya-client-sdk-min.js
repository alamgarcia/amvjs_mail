Array.prototype.indexOf || (Array.prototype.indexOf = function(t, h) {
    for (var r = h || 0; r < this.length; r++)
        if (this[r] === t) return r;
    return -1
});
SessionState = {
    IDLE: 0,
    INITIATING: 1,
    REMOTE_ALERTING: 2,
    ESTABLISHED: 4,
    ENDING: 5,
    ENDED: 6,
    FAILED: 7
};
DTMFType = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    STAR: 10,
    POUND: 11,
    A: 12,
    B: 13,
    C: 14,
    D: 15
};
VideoResolution = {
    RESOLUTION_176x144: 0,
    RESOLUTION_320x180: 1,
    RESOLUTION_352x288: 2,
    RESOLUTION_640x360: 3,
    RESOLUTION_640x480: 4,
    RESOLUTION_960x720: 5,
    RESOLUTION_1280x720: 6
};
SessionError = {
    UNDEFINED: 0,
    SUCCESS: 1,
    IN_PROGRESS: 2,
    FAILED: 3,
    REJECTED: 4,
    BUSY: 5,
    CODEC_MISMATCH: 6,
    USER_NOT_FOUND: 7,
    USER_TEMPORARILY_UNAVAILABLE: 8,
    REDIRECTED: 9,
    TIMEOUT: 10,
    SEND_ERROR: 11,
    AUTHENTICATION_ERROR: 12,
    SERVER_ERROR: 13,
    SESSION_STATE_MISMATCH: 14,
    INTERNAL_ERROR: 15,
    INVALID_PARAMETER: 16,
    TRANSPORT_ERROR: 17,
    LINE_RESERVATION_ERROR: 18,
    NOT_FOUND: 19,
    NOT_REGISTERED: 20,
    NOT_SUPPORTED: 21,
    MEDIA_CREATION_FAILURE: 22,
    MEDIA_START_FAILURE: 23,
    REMOTE_MEDIA_PROCESSING_FAILURE: 24,
    VIDEO_STOP_FAILURE: 25,
    VIDEO_START_FAILURE: 26,
    VIDEO_ADD_FAILURE: 27,
    VIDEO_REMOVE_FAILURE: 28,
    VIDEO_UPDATE_FAILURE: 29,
    CAPACITY_REACHED: 30,
    REQUEST_TERMINATED: 31,
    TEMPORARILY_UNAVAILABLE: 32,
    NO_UUI_HEADER: 33
};

function getBrowserInfo(t) {
    t = "undefined" === typeof t || "boolean" !== typeof t ? navigator.userAgent : t;
    var h, r = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+(?:\.\d+)*)/i) || [];
    if (/trident/i.test(r[1])) return h = /\brv[ :]+(\d+(?:\.\d+)*)/g.exec(t) || [], {
        name: "IE ",
        version: h[1] || ""
    };
    if ("Chrome" === r[1] && (h = t.match(/\b(OPR|Edge)\/(\d+(?:\.\d+)*)/), null != h)) return {
        name: h[1].replace("OPR", "opera").toLowerCase(),
        version: h[2]
    };
    if ("Safari" === r[1] && (h = t.match(/\b(OPR|Edge)\/(\d+(?:\.\d+)*)/), null != h)) return {
        name: h[1].replace("OPR", "opera").toLowerCase(),
        version: h[2]
    };
    r = r[2] ? [r[1], r[2]] : [navigator.appName, navigator.appVersion, "-?"];
    null != (h = t.match(/version\/(\d+(?:\.\d+)*)/i)) && r.splice(1, 1, h[1]);
    return {
        name: r[0],
        version: r[1]
    }
}(function() {
    function t(c) {
        var b = document.createElement("div");
        b.style.display = "none";
        b.id = c;
        b.append = function() {
            var a = document.getElementsByTagName("body")[0];
            a && a.appendChild && a.appendChild(b)
        };
        b.remove = function() {
            b.parentNode && b.parentNode.removeChild && b.parentNode.removeChild(b)
        };
        return b
    }

    function h(c, b, a) {
        this.getVersionNumber = function() {
            return "3.4.1"
        };
        this.getUserAgentBrowser = function() {
            return getBrowserInfo(navigator.userAgent).name
        };
        this.getUserAgentVersion = function() {
            return getBrowserInfo(navigator.userAgent).version
        }
    }

    function r() {
        h.call(this, !0, {}, {});
        var c = new P,
            b = new Q;
        this.getDevice = function() {
            return b
        };
        this.getUser = function() {
            return c
        }
    }

    function R() {
        h.call(this, !0, {}, {});
        var c = new S,
            b = new T;
        this.getDevice = function() {
            return b
        };
        this.getUser = function() {
            return c
        }
    }

    function z(c, b, a) {
        var e = null,
            d = this;
        c && (l(v, "sdk-ready", d, function(a) {
            if (!0 === a) d.onServiceAvailableCB();
            else d.onServiceUnavailableCB()
        }), l(v, "connection-reestablished", d, function() {
            d.onServiceAvailableCB();
            d.onConnReestablished()
        }), l(v, "connection-retry", d, function() {
            d.onConnectionInProgressCB();
            d.onConnRetry()
        }), l(v, "connection-lost", d, function() {
            d.onServiceUnavailableCB();
            d.onConnLost()
        }), l(v, "critical-error", d, function() {
            d.onServiceUnavailableCB();
            d.onCriticalError()
        }), l(v, "network-error", d, function() {
            d.onServiceUnavailableCB();
            d.onNetworkError()
        }));
        this.getSessionAuthorizationToken = function() {
            return e
        };
        this.setSessionAuthorizationToken = function(a) {
            if (null != e) throw "The session authorization token can only be set once.";
            e = a;
            null != I && (/[\?&]unit-test=true/.test(J.src) ? U(a.sessionid) : I(V(a.sessionid), function() {
                U(a.sessionid)
            }))
        };
        this.isServiceAvailable = function() {
            return E
        };
        this.onServiceUnavailableCB = function() {};
        this.onServiceAvailableCB = function() {};
        this.onConnectionInProgressCB = function() {};
        this.onConnLost = function() {};
        this.onConnRetry = function() {};
        this.onConnReestablished = function() {};
        this.onNetworkError = function() {};
        this.onCriticalError = function() {}
    }

    function P() {
        z.call(this, !0, {}, {});
        this.createSession = function() {
            return new W(this)
        }
    }

    function S() {
        z.call(this, !0, {}, {});
        this.createSession = function() {
            return new X(this)
        }
    }

    function A(c, b, a, e) {
        function d() {
            return n
        }

        function C() {
            return x
        }

        function B() {
            l(k, "sdk-ready", g, function(a) {
                if (!0 === a) g.onSessionServiceAvailable();
                else g.onSessionServiceUnavailable()
            });
            l(k, "session-ending", g, function() {
                m = SessionState.ENDING
            });
            l(k, "session-ended", g, function() {
                m = SessionState.ENDED;
                g.onSessionEnded()
            });
            l(k, "session-failed", g, function(a) {
                m = SessionState.FAILED;
                g.onSessionFailed(a);
                g.onSessionEnded()
            });
            l(k, "dial-error", g, function(a) {
                f(k["session-failed"], [a]);
                g.onDialError(a)
            });
            l(k, "call-error", g, function(a) {
                f(k["session-failed"], [a]);
                g.onCallError(a)
            });
            l(k, "session-established", g, function() {
                m = SessionState.ESTABLISHED;
                g.onSessionEstablished()
            });
            l(k, "remote-alerting", g, function(a) {
                m = SessionState.REMOTE_ALERTING;
                g.onSessionRemoteAlerting(a)
            });
            l(k, "session-remote-address-changed", g, function(a, b) {
                g.onSessionRemoteAddressChanged(a, b);
                g.onSessionRemoteDisplayNameChanged(b)
            });
            l(k, "session-queued", g, function() {
                m = SessionState.QUEUED;
                g.onSessionQueued()
            });
            l(k, "session-redirected", g, function() {
                m = SessionState.REDIRECTED;
                g.onSessionRedirected()
            });
            l(k, "session-quality", g, function(a) {
                g.onQualityChanged(a)
            });
            l(k, "get-media-error", g, function() {
                g.onGetMediaError()
            });
            l(k, "capacity-reached", g, function() {
                g.onCapacityReached()
            })
        }

        function K(a, b) {
            "*" === a && (a = "_all");
            null != b && l(h, a, g, b)
        }

        function p(a, b) {
            f(h[a], [b, a]);
            f(h._all, [b, a])
        }

        function r(a, b, c, d) {
            var e = V(a);
            a = e + c;
            var p = function() {
                var a = null,
                    b = e.replace(/.*:\/\/([^:/]*)[:/].*/, "$1");
                window.location.hostname !== b ? window.XMLHttpRequest ? (a = new window.XMLHttpRequest, "withCredentials" in a || (a = window.XDomainRequest ? new window.XDomainRequest : null)) : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")) : window.XMLHttpRequest ? a = new window.XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP"));
                return a
            }();
            if (null != p) {
                p.onreadystatechange = function() {
                    4 === p.readyState && (A = p.readyState, clearTimeout(g), "function" === typeof d && d(p.status, p.responseText))
                };
                p.open(b, a);
                p.send();
                var g = setTimeout(function() {
                    p.abort();
                    "function" === typeof d && d(408, "Timeout")
                }, 1E3)
            } else console.error("Can't connect to gateway. No AJAX request object available.")
        }

        function Y() {
            null != n && n.setLocalMediaEnabled(a.shouldVideoBeEnabled(), !g.isAudioMuted())
        }
        var x = {},
            h = {},
            k = {},
            n, q = null,
            t = -1,
            u = -1,
            m = SessionState.IDLE,
            y, F;
        c && (y = ea++, F = e.getSessionAuthorizationToken().uuid + "-" + y);
        var g = this,
            G = new Z(D),
            z = !1,
            A = 0;
        b && (b.addConfigurationListener = K, b.updateLocalMediaState = Y, b.getCall = d, b.getSessionConfiguration = C, b.fireConfigurationChanged = p);
        c && B();
        /[\?&]unit-test=true/.test(J.src) && c && (this.addConfigurationListener = K);
        K("audio-muted", function(a) {
            g.onSessionAudioMuteStatusChanged(a);
            Y()
        });
        this.onSessionRemoteAlerting = function(a) {};
        this.onSessionRedirected = function() {};
        this.onSessionQueued = function() {};
        this.onQualityChanged = function(a) {};
        this.onDialError = function(a) {};
        this.onCallError = function(a) {};
        this.onSessionEstablished = function() {};
        this.onSessionRemoteAddressChanged = function(a, b) {};
        this.onSessionRemoteDisplayNameChanged = function(a) {};
        this.onSessionEnded = function() {};
        this.onSessionFailed = function(a) {};
        this.onSessionAudioMuteStatusChanged = function(a) {};
        this.onSessionAudioMuteFailed = function(a, b) {};
        this.onSessionServiceAvailable = function() {};
        this.onSessionServiceUnavailable = function() {};
        this.onGetMediaError = function() {};
        this.onCapacityReached = function() {};
        this.setContextId = function(a) {
            if (G.isBlockedBy("context-id")) G.queueFunction(g.setContextId, arguments, "context-id");
            else if (x.contextId !== a) {
                var b = e.getSessionAuthorizationToken();
                if (null == b || null == b.sessionid) throw "Can't set context ID before setting token.";
                G.addQueueBlocker("context-id", 1E3);
                x.contextId = a;
                p("context-id", a);
                z = !0;
                r(b.sessionid, "POST", "/avaya/uui?callUuid\x3d" + F + "\x26context\x3d" + encodeURIComponent(a), function() {
                    G.removeQueueBlocker("context-id")
                })
            }
        };
        this.getContextId = function() {
            return x.contextId
        };
        this.setRemoteAddress = function(a) {
            x.remoteAddress = a;
            p("remote-address", a)
        };
        this.getRemoteAddress = function() {
            return x.remoteAddress
        };
        this.muteAudio = function(a) {
            x.audioMuted = a;
            p("audio-muted", a)
        };
        this.isAudioMuted = function() {
            return null != x.audioMuted ? x.audioMuted : !1
        };
        this.sendDTMF = function(a, b) {
            var c;
            a: {
                c = DTMFType;
                for (var d in c)
                    if (c.hasOwnProperty(d) && c[d] === a) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            if (!c) throw a + " is not a valid DTMFType.";
            if (null != n) {
                switch (a) {
                    case DTMFType.STAR:
                        c = "*";
                        break;
                    case DTMFType.POUND:
                        c = "#";
                        break;
                    case DTMFType.A:
                        c = "A";
                        break;
                    case DTMFType.B:
                        c = "B";
                        break;
                    case DTMFType.C:
                        c = "C";
                        break;
                    case DTMFType.D:
                        c = "D";
                        break;
                    default:
                        c = "" + a
                }
                n.sendDtmf(c, "undefined" === typeof b || "boolean" !== typeof b ? !0 : b)
            }
        };
        this.start = function() {
            function b(a) {
                0 != a.indexOf("sip:") && (a = "sip:" + a);
                if (0 > a.indexOf("@")) {
                    var c = e.getSessionAuthorizationToken();
                    a += "@" + c.defaultDomain
                }
                null != F && (a += ";calluuid\x3d" + F);
                return a
            }

            function c(a) {
                if (getBrowserInfo().name.match(/safari/i)) return null;
                a = UC.aed.createTopic("vivaldi:" + a, 0);
                a.onMessageReceived = function(a) {
                    console.log(this.getName() + ' onMessageReceived()\n"' + a + '"');
                    a = parseInt(a);
                    if (isNaN(a)) console.log(this.getName() + ' onMessageReceived()\n"non numeric status"');
                    else switch (a) {
                        case 181:
                            f(k["session-redirected"]);
                            break;
                        case 182:
                            f(k["session-queued"]);
                            break;
                        default:
                            console.log(this.getName() + ' onMessageReceived()\n"unsupported status"')
                    }
                };
                a.connect();
                return a
            }
            if (null == x.remoteAddress) throw "No remote address set.";
            G.queueFunction(function() {
                t = (new Date).getTime();
                u = -1;
                q = c(F);
                n = UC.phone.createCall(b(x.remoteAddress));
                m = SessionState.INITIATING;
                a.callPrepare();
                n.onDialFailed = function(a, b) {
                    console.debug("Dialing failed with error %o: %o", b, a);
                    var c = aa(b);
                    f(k["dial-error"], [c]);
                    null != q && (q.disconnect(!0), q = null)
                };
                n.onNotFound = function() {
                    console.debug("Call failed as number was not reachable.");
                    f(k["session-failed"], [SessionError.NOT_FOUND]);
                    null != q && (q.disconnect(!0), q = null)
                };
                n.onCallFailed = function(b, c) {
                    a.callFailed();
                    console.debug("Call failed with error %o: %o", c, b);
                    var d = aa(c);
                    d == SessionError.CAPACITY_REACHED && f(k["capacity-reached"]);
                    f(k["call-error"], [d]);
                    null != q && (q.disconnect(!0), q = null)
                };
                n.onGetUserMediaError = function(a) {
                    clientPlatform.getDevice().receivedMediaPermissionsError = !0;
                    console.debug("Failed to get user media: %o", a);
                    f(k["get-media-error"]);
                    f(k["session-failed"], [SessionError.MEDIA_START_FAILURE])
                };
                n.onInCall = function() {
                    console.debug("Session established.");
                    f(k["session-established"]);
                    var b = a.shouldVideoBeEnabled();
                    console.debug("Setting local media enabled on call startup:", b, !g.isAudioMuted());
                    n.setLocalMediaEnabled(b, !g.isAudioMuted());
                    a.callEstablished()
                };
                n.onRemoteMediaStream = function(b) {
                    console.debug("Received remote media stream.");
                    a.callRemoteMediaStreamAvailable(b)
                };
                n.onLocalMediaStream = function(b) {
                    console.debug("Received local media stream.");
                    a.callLocalMediaStreamAvailable(b)
                };
                n.onRinging = function() {
                    f(k["remote-alerting"], [!1]);
                    var b = a.shouldVideoBeEnabled();
                    console.debug("Setting local media enabled on ringing:", b, !g.isAudioMuted());
                    n.setLocalMediaEnabled(b, !g.isAudioMuted())
                };
                n.onEnded = function() {
                    a.callEnded();
                    f(k["session-ended"]);
                    null != q && (q.disconnect(!0), q = null)
                };
                n.onBusy = function() {
                    f(k["session-failed"], [SessionError.BUSY]);
                    null != q && (q.disconnect(!0), q = null)
                };
                n.onConnectionQualityChanged = function(a) {
                    f(k["session-quality"], [a])
                };
                !0 === z && 4 != A ? (console.log("No User-to-User header, containing the UUI, has been added by the Gateway. Call has been created but the callee has not been dialled. Please retry call."), a.callFailed(), null != q && (q.disconnect(!0), q = null), f(k["session-failed"], [SessionError.NO_UUI_HEADER])) : a.callDial();
                z = !1;
                A = 0
            }, [], "session-start", {
                timeout: 1100,
                failure: function() {
                    console.log("Session.start() called while SDK is not yet ready to start calls.");
                    f(k["session-failed"], [SessionError.FAILED])
                }
            })
        };
        this.end = function() {
            f(k["session-ending"]);
            u = (new Date).getTime();
            null != q && (q.disconnect(!0), q = null);
            n.end();
            a.callEnd();
            f(k["session-ended"])
        };
        this.discard = function() {
            var a = g.getState();
            if (a === SessionState.ESTABLISHED || a === SessionState.ENDING || a === SessionState.REMOTE_ALERTING) throw "Cannot discard an active session.";
            L(v, g);
            L(h, g);
            L(w, g)
        };
        this.getRemoteDisplayName = function() {
            return n.getRemotePartyDisplayName()
        };
        this.getState = function() {
            return m
        };
        this.isServiceAvailable = function() {
            return E
        };
        this.getCallTimeElapsed = function() {
            return -1 == t ? -1 : -1 == u ? (new Date).getTime() - t : u - t
        };
        this.hold = function() {
            n.hold()
        };
        this.resume = function() {
            n.resume()
        }
    }

    function W(c) {
        function b(a) {
            return "undefined" !== typeof a && null != a && "VIDEO" === a.tagName
        }

        function a() {
            b(u) ? "undefined" !== typeof B && null != B && (u.srcObject = B, u.play()) : d.getCall().setPreviewElement(u)
        }

        function e() {
            b(m) ? "undefined" !== typeof h && null != h && (m.srcObject = h, m.play()) : d.getCall().setVideoElement(m)
        }
        var d = {};
        A.call(this, !0, d, {
            callPrepare: function() {
                h = B = null;
                l(w, "local-video-view-changed", C, a);
                l(w, "remote-video-view-changed", C, e)
            },
            callDial: function() {
                d.getCall().dial(UC.phone.media.enabled, UC.phone.media.enabled)
            },
            callEnd: function() {
                y(w, "local-video-view-changed", a);
                y(w, "remote-video-view-changed", e)
            },
            callEstablished: function() {
                function c(a, b) {
                    var d = 50;
                    (function() {
                        null != a() ? b() : 0 < d-- && setTimeout(arguments.callee, 50)
                    })()
                }
                b(u) ? c(function() {
                    return B
                }, a) : a();
                b(m) ? c(function() {
                    return h
                }, e) : e()
            },
            callLocalMediaStreamAvailable: function(a) {
                B = a
            },
            callRemoteMediaStreamAvailable: function(a) {
                h = a
            },
            callFailed: function() {
                y(w, "local-video-view-changed", a);
                y(w, "remote-video-view-changed", e)
            },
            callEnded: function() {
                y(w, "local-video-view-changed", a);
                y(w, "remote-video-view-changed", e)
            },
            shouldVideoBeEnabled: function() {
                return C.isVideoEnabled() && !C.isVideoMuted()
            }
        }, c);
        var C = this,
            B, h;
        d.addConfigurationListener("video-enabled", function(a) {
            a ? (u = M, m = N, null != d.getCall() && (f(w["local-video-view-changed"], [u]), f(w["remote-video-view-changed"], [m]))) : (u = ba, m = ca);
            d.updateLocalMediaState()
        });
        d.addConfigurationListener("video-muted", function(a) {
            C.onSessionVideoMuteStatusChanged(a);
            d.updateLocalMediaState()
        });
        this.enableVideo = function(a) {
            var b = d.getSessionConfiguration();
            b.videoEnabled !== a && (b.videoEnabled = a, d.fireConfigurationChanged("video-enabled", a))
        };
        this.isVideoEnabled = function() {
            var a = d.getSessionConfiguration();
            return null != a.videoEnabled ? a.videoEnabled : !0
        };
        this.muteVideo = function(a) {
            var b = d.getSessionConfiguration();
            b.videoMuted !== a && (b.videoMuted = a, d.fireConfigurationChanged("video-muted", a))
        };
        this.isVideoMuted = function() {
            var a = d.getSessionConfiguration();
            return null != a.videoMuted ? a.videoMuted : !1
        };
        this.onSessionVideoMuteStatusChanged = function(a) {};
        this.onSessionVideoMuteFailed = function(a, b) {};
        this.onSessionVideoRemovedRemotely = function() {}
    }

    function X(c) {
        var b = {};
        A.call(this, !0, b, {
            callPrepare: function() {},
            callDial: function() {
                b.getCall().dial(UC.phone.media.enabled, UC.phone.media.disabled)
            },
            callEnd: function() {},
            callEstablished: function() {},
            callLocalMediaStreamAvailable: function() {},
            callRemoteMediaStreamAvailable: function() {},
            callFailed: function() {},
            callEnded: function() {},
            shouldVideoBeEnabled: function() {
                return !1
            }
        }, c)
    }

    function H(c, b, a) {
        function e(a) {
            f(w[a], Array.prototype.slice.call(arguments, 1))
        }
        b && (b.fireDeviceChangeEvent = e);
        this.couldMediaBeAccessible = function() {
            return !this.receivedMediaPermissionsError
        }
    }

    function Q() {
        var c = {};
        H.call(this, !0, c, {});
        this.setCameraCaptureResolution = function(b) {
            var a, e;
            switch (b) {
                case VideoResolution.RESOLUTION_176x144:
                    a = 176;
                    e = 144;
                    break;
                case VideoResolution.RESOLUTION_320x180:
                    a = 320;
                    e = 180;
                    break;
                case VideoResolution.RESOLUTION_352x288:
                    a = 352;
                    e = 288;
                    break;
                case VideoResolution.RESOLUTION_640x360:
                    a = 640;
                    e = 360;
                    break;
                case VideoResolution.RESOLUTION_640x480:
                    a = 640;
                    e = 480;
                    break;
                case VideoResolution.RESOLUTION_960x720:
                    a = 960;
                    e = 720;
                    break;
                case VideoResolution.RESOLUTION_1280x720:
                    a = 1280;
                    e = 720;
                    break;
                default:
                    throw "Invalid video resolution specified: " + b;
            }
            D.queueFunction(function() {
                var b = null,
                    f;
                for (f in UC.phone.videoresolutions)
                    if (UC.phone.videoresolutions.hasOwnProperty(f)) {
                        var h = UC.phone.videoresolutions[f];
                        h.width <= a && h.height <= e && (null == b || b.width <= h.width && b.height <= h.height) && (b = h)
                    }
                null != b && (UC.phone.setPreferredVideoCaptureResolution(b), c.fireDeviceChangeEvent("capture-resolution-changed", b))
            }, [], "camera-capture-resolution")
        };
        this.setLocalVideoView = function(b) {
            M = document.getElementById(b);
            u !== ba && (u = M);
            c.fireDeviceChangeEvent("local-video-view-changed", u)
        };
        this.setRemoteVideoView = function(b) {
            N = document.getElementById(b);
            m !== ca && (m = N);
            c.fireDeviceChangeEvent("remote-video-view-changed", m)
        }
    }

    function T() {
        H.call(this, !0, {}, {})
    }

    function Z(c) {
        function b(a) {
            var b = m.isBlocked();
            a();
            a = m.isBlocked();
            if (b !== a)
                for (b = 0; b < f.length; b++) f[b](a)
        }

        function a(a) {
            null != a.timeout && clearTimeout(a.timeout);
            a["function"].apply(a["function"], a.arguments)
        }

        function e() {
            for (; 0 < l.length;) a(l.shift());
            for (var b in h)
                if (h.hasOwnProperty(b)) {
                    var c = h[b];
                    delete h[b];
                    try {
                        a(c)
                    } catch (d) {
                        console.error("Error encountered while calling a queued function!", d), null != c.options && "function" === typeof c.options.failure && c.options.failure(d)
                    }
                }
        }
        var d = !1;
        null != c && (c.addQueueStateListener(function(a) {
            b(function() {
                d = a
            });
            m.isBlocked() || e()
        }), d = c.isBlocked());
        var f = [],
            h = {},
            l = [],
            p = [],
            m = this;
        this.queueFunction = function(b, c, d, e) {
            var f = {
                "function": b,
                arguments: c,
                options: e
            };
            m.isBlocked() ? (null == d ? l.push(f) : h[d] = f, null != e && "number" === typeof e.timeout && (f.timeout = setTimeout(function() {
                if (null == d) {
                    var a = l.indexOf(f);
                    0 <= a && l.splice(a, 1)
                } else h[d] === f && delete h[d];
                "function" === typeof f.options.failure && f.options.failure()
            }, e.timeout))) : a(f)
        };
        this.addQueueBlocker = function(a, c) {
            b(function() {
                p.push(a)
            });
            "number" === typeof c && setTimeout(function() {
                m.removeQueueBlocker(a)
            }, c)
        };
        this.addQueueStateListener = function(a) {
            f.push(a)
        };
        this.isBlocked = function() {
            return 0 < p.length || d
        };
        this.isBlockedBy = function(a) {
            for (var b = 0; b < p.length; b++)
                if (p[b] === a) return !0;
            return null != c ? c.isBlockedBy(a) : !1
        };
        this.removeQueueBlocker = function(a) {
            for (var c = 0; c < p.length; c++)
                if (p[c] === a) {
                    b(function(a) {
                        return function() {
                            p.splice(a, 1)
                        }
                    }(c));
                    m.isBlocked() || e();
                    break
                }
        }
    }

    function V(c) {
        c = unescape(c);
        for (var b = [], a = 0; a < c.length; a++) {
            var e = "!:?#[]@%$\x26'()*+,;\x3d._~- 0987654321ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba".indexOf(c[a]);
            b[a] = "/:?#[]@%$\x26'()*+,;\x3d._~- ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890".charAt(e)
        }
        return b.join("").replace(/ws(s?:\/\/[^/]*)\/.*/, "http$1")
    }

    function U(c) {
        function b(a) {
            E !== a && (!0 === a ? D.removeQueueBlocker("sdk-initialised") : D.isBlockedBy("sdk-initialised") || D.addQueueBlocker("sdk-initialised"), E = a, f(v["sdk-ready"], [E]))
        }
        UC.onInitialised = function() {
            b(!0);
            console.debug("SDK initialised.")
        };
        UC.onInitialisedFailed = function() {
            b(!1);
            console.error("ERROR! SDK failed to initialise.", arguments)
        };
        UC.onConnectionReestablished = function() {
            console.log("Avaya:onConnectivityReestablished");
            b(!0);
            f(v["connection-reestablished"])
        };
        UC.onConnectionRetry = function(a, c) {
            console.log("Avaya:onConnectionRetry:" + a + ":" + c);
            b(!1);
            (0 == a || 1 == a && getBrowserInfo().name.match(/safari/i)) && f(v["connection-lost"]);
            f(v["connection-retry"])
        };
        UC.onConnectivityLost = function() {
            console.log("Avaya:onConnectivityLost");
            b(!1);
            f(v["connection-lost"])
        };
        UC.onNetworkUnavailable = function() {
            b(!1);
            console.log("Avaya:onNetworkUnavailable");
            f(v["network-error"])
        };
        UC.onSystemFailure = function() {
            b(!1);
            console.log("Avaya:onSystemFailure");
            f(v["critical-error"])
        };
        UC.start(c, fa)
    }

    function l(c, b, a, e) {
        null == c[b] && (c[b] = []);
        c[b].push(e);
        null != a && (null == a.listeners && (a.listeners = {}), null == a.listeners[b] && (a.listeners[b] = []), a.listeners[b].push(e))
    }

    function y(c, b, a) {
        c = c[b];
        null != c && (a = c.indexOf(a), 0 <= a && c.splice(a, 1))
    }

    function L(c, b) {
        if (null != b.listeners)
            for (var a in b.listeners)
                if (b.listeners.hasOwnProperty(a)) {
                    var e = b.listeners[a];
                    if (null != e)
                        for (; 0 < e.length;) y(c, a, e[0]), e.splice(0, 1)
                }
    }

    function f(c, b) {
        if (null != c)
            for (var a = 0; a < c.length; a++) "function" === typeof c[a] && c[a].apply(c[a], b)
    }

    function ga(c, b) {
        var a = document.getElementsByTagName("body")[0] || document.documentElement,
            e = document.createElement("script");
        e.async = !0;
        var d = !1;
        e.onload = e.onreadystatechange = function() {
            d || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (d = !0, e.onload = e.onreadystatechange = null, a && e.parentNode && a.removeChild(e), b())
        };
        e.src = c + (/[\?&]minified=false/.test(J.src) ? "?minified\x3dfalse" : "");
        e.type = "text/javascript";
        a.appendChild(e)
    }

    function aa(c) {
        switch (c) {
            case 1E3:
                return SessionError.USER_NOT_FOUND;
            case 1001:
                return SessionError.FAILED;
            case 1002:
                return SessionError.FAILED;
            case 1003:
                return SessionError.FAILED;
            case 1004:
                return SessionError.FAILED;
            case 1005:
                return SessionError.FAILED;
            case 1006:
                return SessionError.FAILED;
            case 1007:
                return SessionError.FAILED;
            case 1008:
                return SessionError.FAILED;
            case 1009:
                return SessionError.NOT_SUPPORTED;
            case 1010:
                return SessionError.CAPACITY_REACHED;
            case 1011:
                return SessionError.REQUEST_TERMINATED;
            case 1012:
                return SessionError.TEMPORARILY_UNAVAILABLE;
            default:
                return SessionError.FAILED
        }
    }
    var da = document.getElementsByTagName("script"),
        J = da[da.length - 1],
        fa = [],
        E = !1,
        O = [],
        ba = t("disabled-local-video-element"),
        ca = t("disabled-remote-video-element"),
        m, N, u, M, w = {},
        v = {},
        ea = 0,
        D = new Z;
    D.addQueueBlocker("sdk-initialised");
    window.ClientPlatformFactory = function() {
        this.getClientPlatform = function() {
            return new r
        };
        this.getAudioOnlyClientPlatform = function() {
            return new R
        }
    };
    r.prototype = new h;
    R.prototype = new h;
    P.prototype = new z;
    S.prototype = new z;
    W.prototype = new A;
    X.prototype = new A;
    Q.prototype = new H;
    T.prototype = new H;
    var I = function(c, b) {
        function a(a, b) {
            for (var e = d[a].length, f = 0; f < d[a].length; f++) ga(c + d[a][f], function() {
                --e;
                0 === e && "function" === typeof b && b(a)
            })
        }

        function e(c) {
            if (c >= d.length - 1)
                for ("function" === typeof b && b(!0), c = 0; c < O.length; c++) {
                    if ("function" === typeof O[c]) O[c](!0)
                } else a(c + 1, e)
        }
        I = null;
        null == c && (c = "");
        var d = [
            ["/vivaldi/adapter.js"],
            ["/vivaldi/vivaldi-aed.js", "/vivaldi/vivaldi-phone.js"],
            ["/vivaldi/vivaldi-common.js"]
        ];
        a(0, e)
    }
})();
