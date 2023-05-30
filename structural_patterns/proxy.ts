interface ISubject {
  request(): void;
}

class RealSubject implements ISubject {
  public request(): void {
    console.log('RealSubject: Handling request...');
  }
}

// proxy always implements the same interface as the subject it wraps
class Proxy implements ISubject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  // proxy executes some additional logic before passing the request to the real subject
  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');

    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

// usage

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

// note that due to the proxy and the real subject having the same interface,
// the client code can work with both of them in the same way
realSubject.request();
proxy.request();
