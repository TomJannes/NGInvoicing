import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Breadcrumb } from './breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BreadcrumbComponent {
  breadcrumbs: Breadcrumb[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      const root: ActivatedRoute = this.activatedRoute.root;
      this.breadcrumbs = this.getBreadcrumbs(root);
    });
  }

  getBreadcrumbs(route: ActivatedRoute, url: string= '', breadcrumbs: Breadcrumb[] = []): Breadcrumb[] {
    const RouteDataBreadcrumb = 'breadcrumb';
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (!child.snapshot.data.hasOwnProperty(RouteDataBreadcrumb)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;

      const breadcrumb: Breadcrumb = {
        label: child.snapshot.data[RouteDataBreadcrumb],
        url: url
      };
      breadcrumbs.push(breadcrumb);
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
