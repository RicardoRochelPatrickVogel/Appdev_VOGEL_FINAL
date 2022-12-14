import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({
	providedIn: 'root',
})
export class SelectivePreLoadingStategyService implements PreloadingStrategy {
	preloadedModules: string[] =[];

	preload(route: Route, load: () => Observable<any>): Observable<any> {
		if (route.data?.['preload'] && route.path != null) {
			
			this.preloadedModules.push(route.path);

			
			console.log('Preloaded: ' + route.path);

			return load();
		} else {
			return of(null);
		}
	}
}